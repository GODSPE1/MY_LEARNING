console.log("Audio.js loaded");

const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("prev");
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Song titles
const songs = ['acoustic', 'the_beat_of_nature', 'ukelele', 'whistle_whistle'];

// Keep track of song
let songIndex = 1;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
    
    // FIX: Force the audio element to load the new source path
    audio.load();
}

// Play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    
    // Play returns a promise, we handle it to catch errors
    audio.play().catch(error => {
        console.error("Playback failed:", error);
    });
}

// Pause song (Added this as it was missing in your snippet)
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Debugging listeners
audio.addEventListener('loadedmetadata', () => {
  console.log('Metadata loaded, Duration:', audio.duration);
});

audio.addEventListener('error', (e) => {
  console.error('Audio error details:', audio.error);
});