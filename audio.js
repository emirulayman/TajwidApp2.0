/* ================= AUDIO STATE ================= */
// These stay at the top so the app remembers what is currently playing
let currentAudio = null;
let currentBtn = null;

/* ================= CORE FUNCTIONS ================= */

export function playAudio(btn, audioUrl) {
    // 1. Identify which verse we are playing
    const verseMatch = audioUrl.match(/\d{6}/);
    const verseId = verseMatch ? verseMatch[0] : null;

    // 2. Check which reciter is selected in the dropdown
    let finalAudioUrl = audioUrl;
    if (verseId) {
        const reciterSelect = document.getElementById('reciter-select');
        const reciter = reciterSelect ? reciterSelect.value : 'Alafasy_128kbps';
        finalAudioUrl = `https://everyayah.com/data/${reciter}/${verseId}.mp3`;
    }

    // 3. If something is already playing, stop it first
    if (currentAudio) {
        currentAudio.pause();
        if (currentBtn) {
            currentBtn.classList.remove('playing');
            currentBtn.innerHTML = getPlayIcon();
        }
    }

    // 4. Toggle logic: If user clicked the "Pause" button, we just stop here
    if (currentAudio && currentAudio.src === finalAudioUrl && !currentAudio.paused) {
        currentAudio = null;
        return;
    }

    // 5. Create and play the new audio
    currentAudio = new Audio(finalAudioUrl);
    currentBtn = btn;

    btn.innerHTML = getPauseIcon();
    btn.classList.add('playing');

    currentAudio.play().catch(e => {
        console.error("Audio playback failed:", e);
        btn.innerHTML = getPlayIcon();
        btn.classList.remove('playing');
    });

    // 6. Reset the button when the audio finishes naturally
    currentAudio.onended = () => {
        btn.innerHTML = getPlayIcon();
        btn.classList.remove('playing');
        currentAudio = null;
    };
}

/* ================= ICON HELPERS ================= */

export function getPlayIcon() {
    return `<svg class="w-5 h-5 ml-1 play-icon" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>`;
}

export function getPauseIcon() {
    return `<svg class="w-5 h-5 play-icon" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>`;
}