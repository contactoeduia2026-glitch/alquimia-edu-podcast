#!/bin/sh
# Genera la voz en tu computador (opcional; lo normal es que GitHub lo haga solo).
# Requisitos: Node, Python y ffmpeg instalados.
cd "$(dirname "$0")"
printf "Pega tu clave de Gemini y presiona Enter: "; stty -echo; read GEMINI_API_KEY; stty echo; echo
export GEMINI_API_KEY
pip install "google-genai>=2.25.0" && node tools/make-manifest.js && python3 tools/generate-audio-gemini.py
