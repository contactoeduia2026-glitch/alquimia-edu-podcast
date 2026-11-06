# AlquimiaEdu · Operación al Día · Agroindustria

Podcast de ~14 min con 3 voces distintas. Sitio 100 % estático.

1. Sube **todo** (incluida la carpeta oculta `.github`) a la **raíz** de un repositorio nuevo (index.html debe quedar en la raíz, no dentro de una subcarpeta).
2. Settings → Secrets and variables → Actions: crea `GEMINI_API_KEY` (opcional `GEMINI_API_KEY2`…`10`) y `VERCEL_DEPLOY_HOOK`.
3. Settings → Actions → General → Workflow permissions: **Read and write**.
4. (Opcional) Variables `VOZ_1`, `VOZ_2`, `VOZ_3` (por defecto Callirrhoe, Alnilam, Vindemiatrix).
5. Actions → «Generar voz del podcast» → Run workflow.
6. Vercel: Framework **Other**, Root Directory `./`.
