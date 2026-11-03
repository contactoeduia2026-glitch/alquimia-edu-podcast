"""Lista voces en español latino del catálogo de Gemini para elegir a Valentina y a Mateo.
Uso: GEMINI_API_KEY=tu_clave python tools/listar-voces.py"""
from google import genai
client = genai.Client()
resp = client.voices.list(language_code=["es-CO", "es-419", "es-MX", "es-US"], contexts=["Conversational", "Audiobook"], page_size=100)
for v in resp.voices or []:
    print(f"{v.id} | {v.display_name} ({v.language_code}, {v.accent}, {v.gender}): {v.description}")
