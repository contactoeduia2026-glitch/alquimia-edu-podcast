"""Genera la voz del curso con Gemini TTS (gemini-3.8-flash-tts) y la deja lista en audio/<id>.mp3.

Se ejecuta UNA vez por curso (o cuando cambia el guion), nunca cuando un estudiante abre el curso.
Requisitos: pip install "google-genai>=2.25.0" y ffmpeg instalado.
Variables de entorno:
  GEMINI_API_KEYS  claves de uno o varios proyectos de Gemini, una por línea; se usan en orden
                   y se pasa a la siguiente cuando una agota su cuota diaria (en GitHub va como secreto)
  GEMINI_API_KEY   una sola clave (sigue funcionando si no usas GEMINI_API_KEYS)
  VOZ_1 / VOZ_2 / VOZ_3  voces de los tres participantes (nombre prediseñado o ID de Voice design)
Uso: node tools/make-manifest.js   y luego   python tools/generate-audio-gemini.py
Solo genera los audios que faltan: si se acaba la cuota del día, se detiene y la próxima ejecución sigue donde quedó.
  PAUSA_SEG        segundos entre llamadas (por defecto 6)"""
import json, os, re, subprocess, sys, tempfile, time

try:
    from google import genai
except ImportError:
    sys.exit('Falta la librería. Instala con:  pip install "google-genai>=2.25.0"')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AUDIO = os.path.join(ROOT, "audio")
MODELO = os.environ.get("MODELO_TTS", "gemini-3.8-flash-tts")
VOCES = {"v1": os.environ.get("VOZ_1") or "Callirrhoe", "v2": os.environ.get("VOZ_2") or "Alnilam", "v3": os.environ.get("VOZ_3") or "Vindemiatrix"}

# Estilo corto y constante por tipo de narración (la documentación recomienda frases breves, no párrafos)
ESTILO = {
    "clase": "cercana y clara, ritmo pausado, como una profesora que explica con gusto",
    "podcast": "conversación profesional, cercana y natural entre colegas",
    "practica": "explicando con calma mientras señala algo en pantalla",
}

# Solo para el audio: el texto en pantalla no cambia
PRONUNCIACION = [(r"HACCP", "hásep"), (r"E\. coli", "e coli"), (r"(?i)data loggers?", "deita loguers"), (r"\bFEFO\b", "fefo"), (r"\bCAPA\b", "capa"), (r"SARLAFT", "sarlaft"), (r"\bKYC\b", "ca i ce"), (r"\bOTP\b", "o te pe"), (r"\bPEP\b", "pep"), (r"\bUIAF\b", "u i a efe"), (r"\bSARO\b", "saro"), (r"Bre-B", "bre be"), (r"(?i)SIM swap", "sim suap"), (r"\bPSE\b", "pe ese e"), (r"\bSLA\b", "ese ele a"), (r"AlquimiaEdu", "Alquimia Edu"), (r"\bIA\b", "i a"), (r"\bOEE\b", "O E E"), (r"\b5S\b", "cinco eses"), (r"\bSMED\b", "esmed"), (r"\bPDCA\b", "pe de ce a"), (r"Edu\.ia", "Edu I A"),
                 (r"\bTPM\b", "te pe eme"), (r"\bASME\b", "asme"), (r"(?i)\btakt\b", "tact"), (r"(?i)\blean\b", "lin"),
                 (r"(?i)\bkaizen\b", "káizen"), (r"(?i)\bpoka-yoke\b", "poca yoque"), (r"(?i)\bkanban\b", "cánban"),
                 (r"(?i)\bgemba\b", "guemba"), (r"(?i)\bthroughput\b", "zrúput"), (r"(?i)\blead time\b", "lid taim")]
PAUSA = float(os.environ.get("PAUSA_SEG") or "6")  # segundos entre llamadas; súbelo si ves muchos errores 429 por minuto

def preparar(texto):
    for a, b in PRONUNCIACION:
        texto = re.sub(a, b, texto)
    texto = texto.replace("…", "... <short pause>")      # pausas naturales donde el guion duda
    texto = re.sub(r"\?\s+(?=[A-ZÁÉÍÓÚÑ¿¡])", "? <short pause> ", texto)
    return texto

def a_mp3(wav_bytes, destino):
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        f.write(wav_bytes); tmp = f.name
    filtro = ("silenceremove=start_periods=1:start_threshold=-50dB,areverse,"
              "silenceremove=start_periods=1:start_threshold=-50dB,areverse,"
              "adelay=150,apad=pad_dur=0.25,loudnorm=I=-16:TP=-1.5:LRA=11")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", tmp, "-af", filtro, "-ac", "1", "-ar", "24000", "-b:a", "64k", destino], check=True)
    os.remove(tmp)

def duracion(ruta):
    try:
        out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", ruta],
                             capture_output=True, text=True, timeout=30).stdout.strip()
        return float(out)
    except Exception:
        return 0.0

def audio_valido(ruta, texto):
    """Descarta audios vacíos, cortados o en silencio: deben durar al menos ~40 % de lo esperado para el texto."""
    if not os.path.exists(ruta) or os.path.getsize(ruta) < 1000:
        return False
    esperado = len(texto.split()) * 60 / 170
    return duracion(ruta) >= max(0.8, 0.4 * esperado)

def generar(client, item):
    voz = VOCES.get(item["sp"], VOCES["v1"])
    resp = client.models.generate_content(
        model=MODELO,
        contents=[{"role": "user", "parts": [{"text": preparar(item["text"]), "speech_metadata": {"style": ESTILO.get(item.get("kind"), "")}}]}],
        config={"response_modalities": ["AUDIO"], "speech_config": {"voice_config": {"voice": voz}}},
    )
    return resp.candidates[0].content.parts[0].inline_data.data  # WAV 24 kHz mono

def espera_sugerida(msg):
    m = re.search(r"retry(?:Delay)?[^0-9]{0,12}([0-9.]+)\s*s", msg, re.I)
    return min(float(m.group(1)) + 2, 120) if m else None

def cuota_diaria(msg):
    return "429" in msg and re.search(r"per ?day|PerDay|daily", msg, re.I) is not None

def error_de_clave(msg):
    return re.search(r"API_KEY_INVALID|PERMISSION_DENIED|API key not valid|\b40[13]\b", msg) is not None

def leer_claves():
    """Claves de uno o varios proyectos de Gemini, en orden de uso.
    GEMINI_API_KEYS: varias claves, una por línea o separadas por comas. GEMINI_API_KEY: una sola (compatibilidad)."""
    crudo = (os.environ.get("GEMINI_API_KEYS") or "") + "\n" + (os.environ.get("GEMINI_API_KEY") or "")
    claves = []
    for k in re.split(r"[\s,;]+", crudo):
        if k and k not in claves:
            claves.append(k)
    return claves

def main():
    claves = leer_claves()
    if not claves:
        sys.exit("Falta GEMINI_API_KEYS o GEMINI_API_KEY.")
    items = json.load(open(os.path.join(AUDIO, "manifest.json"), encoding="utf8"))
    pendientes, malos = [], []
    for it in items:
        ruta = os.path.join(AUDIO, it["id"] + ".mp3")
        if audio_valido(ruta, it["text"]):
            continue
        if os.path.exists(ruta):
            malos.append(it); os.remove(ruta)
        pendientes.append(it)
    for it in malos:
        print(f"  audio vacío o cortado, se vuelve a generar: {it['kind']} · {it['text'][:60]}")
    print(f"{len(items)} frases en el curso · faltan {len(pendientes)} ({len(malos)} dañados) · {len(claves)} proyecto(s) de Gemini disponibles")
    actual = 0
    client = genai.Client(api_key=claves[actual])
    print(f"Usando proyecto 1/{len(claves)}")

    def siguiente(motivo):
        nonlocal actual, client
        actual += 1
        if actual >= len(claves):
            return False
        client = genai.Client(api_key=claves[actual])
        print(f"{motivo} Pasando al proyecto {actual + 1}/{len(claves)}.")
        return True

    nuevos, agotado = 0, False
    for it in pendientes:
        destino = os.path.join(AUDIO, it["id"] + ".mp3")
        hecho, intento = False, 0
        while not hecho and intento < 6:
            try:
                a_mp3(generar(client, it), destino)
                if not audio_valido(destino, it["text"]):
                    os.remove(destino)
                    raise RuntimeError(f"Gemini devolvió un audio vacío o cortado")
                nuevos += 1; hecho = True
                print(f"[{nuevos}/{len(pendientes)}] p{actual + 1} · {it['kind']} · {it['text'][:60]}")
            except Exception as e:
                msg = str(e)
                if cuota_diaria(msg) or error_de_clave(msg):
                    motivo = f"Proyecto {actual + 1}: " + ("se acabó la cuota diaria." if cuota_diaria(msg) else f"la clave no funciona ({msg[:80]}).")
                    if siguiente(motivo):
                        intento = 0; continue
                    print(motivo + " No quedan más proyectos. Lo generado queda guardado; la próxima ejecución sigue donde quedó.")
                    agotado = True; break
                intento += 1
                espera = espera_sugerida(msg) or 15 * intento
                print(f"  reintento en {espera:.0f} s: {msg[:160]}"); time.sleep(espera)
        if not hecho:
            break
        time.sleep(PAUSA)
    print(f"Listo: {nuevos} audios nuevos. Faltan {len(pendientes) - nuevos}.")

if __name__ == "__main__":
    main()
