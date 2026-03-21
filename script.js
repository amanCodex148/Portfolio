const audio = document.getElementById("bg-music");
const btn = document.getElementById("music-toggle1");
const footerToggle = document.getElementById("music-toggle2");

audio.volume = 0.3;
let isPlaying = false;

/* ================= NAVBAR BUTTON ================= */

btn.onclick = () => {
    if (audio.paused) {
        audio.play();
        btn.textContent = "🔊";
        isPlaying = true;
    } else {
        audio.pause();
        btn.textContent = "🔇";
        isPlaying = false;
    }
};


/* ================= FOOTER CLICK (same functionality, no text change) ================= */

footerToggle.onclick = () => {
    if (audio.paused) {
        audio.play();
        btn.textContent = "🔊"; // sync navbar button
    } else {
        audio.pause();
        btn.textContent = "🔇"; // sync navbar button
    }
};

/* ================= ON REFRESHING, FORCE SCROLL TO TOP ================= */

window.onload = () => {
    window.scrollTo(0, 0);
};


