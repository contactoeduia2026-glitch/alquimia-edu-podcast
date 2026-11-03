# AlquimiaEdu · Operación al Día · Banca y seguros

Podcast de ~15 min con 3 voces distintas (Camila, Andrés, Marcela). Sitio 100 % estático.

1. Sube **todo** (incluida la carpeta oculta `.github`) a la raíz de un repositorio nuevo en GitHub.
2. Settings → Secrets and variables → Actions: crea `GEMINI_API_KEY` (opcional `GEMINI_API_KEY2`…`10`) y `VERCEL_DEPLOY_HOOK`.
3. Settings → Actions → General → Workflow permissions: **Read and write**.
4. (Opcional) Variables `VOZ_CAMILA`, `VOZ_ANDRES`, `VOZ_MARCELA` (por defecto Kore, Achird, Aoede).
5. Actions → «Generar voz del podcast» → Run workflow.
6. Vercel: conecta el repo, Framework **Other**, Root Directory `./`.

El guion está en `content.js`; para el siguiente sector duplica la carpeta y cambia ese archivo.
