@echo off
REM Genera la voz en tu computador (opcional; lo normal es que GitHub lo haga solo).
REM Requisitos: Node, Python y ffmpeg instalados (ffmpeg: winget install ffmpeg)
cd /d "%~dp0"
set /p GEMINI_API_KEY=Pega tu clave de Gemini y presiona Enter: 
pip install "google-genai>=2.25.0"
node tools\make-manifest.js
python tools\generate-audio-gemini.py
pause
