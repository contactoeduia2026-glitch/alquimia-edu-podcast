// Crea audio/manifest.json con todas las frases del podcast y borra los mp3 que ya no corresponden (guion editado).
// Uso: node tools/make-manifest.js
const fs = require("fs"), path = require("path");
const P = require(path.join(__dirname, "..", "content.js"));
const DIR = path.join(__dirname, "..", "audio");
const hash = s => { s = s.trim(); let h = 5381; for (const ch of s) h = (((h << 5) + h) + ch.codePointAt(0)) >>> 0; return h.toString(16); };
const out = [], seen = new Set();
P.chapters.forEach(c => c.lines.forEach(([sp, text]) => { const id = hash(text); if (seen.has(id)) return; seen.add(id); out.push({ id, sp, kind: "podcast", text }); }));
fs.mkdirSync(DIR, { recursive: true });
fs.writeFileSync(path.join(DIR, "manifest.json"), JSON.stringify(out, null, 1));
let borrados = 0;
fs.readdirSync(DIR).filter(f => f.endsWith(".mp3") && !seen.has(f.slice(0, -4))).forEach(f => { fs.unlinkSync(path.join(DIR, f)); borrados++; });
const hechos = out.filter(x => fs.existsSync(path.join(DIR, x.id + ".mp3"))).length;
console.log(`manifest.json con ${out.length} frases · ${hechos} ya tienen audio · faltan ${out.length - hechos}` + (borrados ? ` · ${borrados} audios viejos borrados` : ""));
