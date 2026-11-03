const fs = require("fs"), path = require("path");
// Importamos el archivo de datos del podcast
const PODCAST_DATA = require(path.join(__dirname, "..", "podcast-data.js"));
const DIR = path.join(__dirname, "..", "audio");
const hash = s => { s = s.trim(); let h = 5381; for (const ch of s) h = (((h << 5) + h) + ch.codePointAt(0)) >>> 0; return h.toString(16); };
const out = [], seen = new Set();

PODCAST_DATA.script.forEach(line => {
  const id = hash(line.t);
  if (!seen.has(id)) {
    seen.add(id);
    // sp: 1 = Valentina (vale), sp: 2 = Mateo (mateo)
    const spName = line.sp === 1 ? "vale" : "mateo";
    out.push({ id, sp: spName, kind: "podcast", text: line.t });
  }
});

fs.mkdirSync(DIR, { recursive: true });
fs.writeFileSync(path.join(DIR, "manifest.json"), JSON.stringify(out, null, 1));
const hechos = out.filter(x => fs.existsSync(path.join(DIR, x.id + ".mp3"))).length;
console.log(`manifest.json con ${out.length} frases · ${hechos} ya tienen audio · faltan ${out.length - hechos}`);