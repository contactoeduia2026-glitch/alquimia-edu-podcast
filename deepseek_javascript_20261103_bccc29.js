// app.js
(() => {
  "use strict";
  const $ = s => document.querySelector(s);
  const hash = s => { s = s.trim(); let h = 5381; for (const ch of s) h = (((h << 5) + h) + ch.codePointAt(0)) >>> 0; return h.toString(16); };
  
  const P = PODCAST_DATA;
  let currentLine = 0;
  let isPlaying = false;
  let audioPlayer = new Audio();
  let isMp3Available = false;

  // UI Elements
  const playBtn = $("#playBtn");
  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");
  const captionTxt = $("#captionTxt");
  const captionWho = $("#captionWho");
  const progressBar = $("#progressBar");
  const timeCurrent = $("#timeCurrent");
  const timeTotal = $("#timeTotal");

  // Init UI
  $("#showTitle").textContent = P.showName;
  $("#epTitle").textContent = P.title;
  $("#epSector").textContent = P.sector;
  $("#epDesc").textContent = P.description;
  
  // Check if mp3s exist
  fetch("audio/manifest.json").then(r => r.ok ? (isMp3Available = true) : null).catch(() => {});

  const fmt = s => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60), sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  function updateUI() {
    const line = P.script[currentLine];
    const host = P.hosts[line.sp];
    captionWho.textContent = host.name;
    captionTxt.textContent = line.t;
    playBtn.innerHTML = isPlaying ? "❚❚" : "▶";
    playBtn.setAttribute("aria-label", isPlaying ? "Pausar" : "Reproducir");
  }

  function playLine() {
    if (currentLine >= P.script.length) {
      stop();
      return;
    }
    const line = P.script[currentLine];
    updateUI();

    if (isMp3Available) {
      audioPlayer.src = "audio/" + hash(line.t) + ".mp3";
      audioPlayer.play().catch(() => fallbackTTS(line));
    } else {
      fallbackTTS(line);
    }
  }

  function fallbackTTS(line) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(line.t);
    u.lang = "es-CO";
    u.rate = 1.0;
    u.onend = () => { if (isPlaying) { currentLine++; playLine(); } };
    window.speechSynthesis.speak(u);
  }

  audioPlayer.ontimeupdate = () => {
    if (audioPlayer.duration) {
      progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      timeCurrent.textContent = fmt(audioPlayer.currentTime);
      timeTotal.textContent = fmt(audioPlayer.duration);
    }
  };

  audioPlayer.onended = () => {
    currentLine++;
    if (isPlaying) playLine();
  };

  function togglePlay() {
    if (isPlaying) {
      isPlaying = false;
      audioPlayer.pause();
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    } else {
      isPlaying = true;
      if (!audioPlayer.src) playLine();
      else audioPlayer.play();
    }
    updateUI();
  }

  function stop() {
    isPlaying = false;
    audioPlayer.pause();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    updateUI();
  }

  playBtn.onclick = togglePlay;
  prevBtn.onclick = () => {
    if (currentLine > 0) {
      currentLine--;
      if (isPlaying) playLine();
      else updateUI();
    }
  };
  nextBtn.onclick = () => {
    if (currentLine < P.script.length - 1) {
      currentLine++;
      if (isPlaying) playLine();
      else updateUI();
    }
  };

  progressBar.oninput = () => {
    if (audioPlayer.duration) {
      audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
    }
  };

  updateUI();
})();