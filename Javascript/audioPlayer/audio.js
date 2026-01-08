console.log("Audio.js loaded");

const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const progressContainer = document.getElementById("progress-container");
const volume = document.getElementById("volume-progress");

// Song titles
const songs = ['acoustic-nature-237840', 'the-beat-of-nature-122841', 'ukulele', 'whistle-whistle-ukulele-cute-music-263129'];

// Song images
const images = ['monkey-3098404_640.jpg', 'song-669786_640.jpg'];

// Keep track of song
let songIndex = 3;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    
    // Validate index range for images, cycling if necessary
    const imgIndex = songIndex % images.length; 
    cover.src = `images/${images[imgIndex]}`;
    
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

function prevSong() {
    // reduce the song by 1
    songIndex--;

    // check if the song is last
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
     playSong();

}

function nextSong() {
    // icrease the song by 1
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;

    }
    loadSong(songs[songIndex]);
    playSong();

};

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    // console.log(`Duration: ${Math.floor(duration)}, Current Time: ${Math.floor(currentTime)}`);
    if (!duration) return; // Prevent division by zero
    const progressPercent = (currentTime / duration) * 100;
    const progress = document.getElementById('progress');
    progress.style.width = `${progressPercent}%`;
}


// Event listeners

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    
    audio.currentTime = (clickX / width) * duration;    
}

function setVolume(value = 50) {
    // const value = Number(e.target.value);
    audio.volume = value / 100;
}



playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
volume.addEventListener('input', (e) => {
    setVolume(e.target.value);
});


// Debugging listeners
audio.addEventListener('loadedmetadata', () => {
  console.log('Metadata loaded, Duration:', audio.duration);
});


audio.addEventListener('error', (e) => {
  console.error('Audio error details:', audio.error);
});