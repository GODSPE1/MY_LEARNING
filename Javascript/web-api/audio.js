console.log('Audio.js loaded');
const STEP = 5; // seconds

// DOM Elements

const play = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stop = document.getElementById('stop');
const volume = document.getElementById('volume');
const countingTimeDownwards = document.getElementById('counting-time-downwards');
const countingTimeUpwards = document.getElementById('counting-time-upwards');
const timeRange = document.getElementById('time-range');
const stepUp = document.getElementById('step-up');
const stepDown = document.getElementById('step-down');

// Event Listeners and Functions
play.addEventListener('click', () => { audioController.play();});
pauseBtn.addEventListener('click', () => { audioController.pause();});
stop.addEventListener('click', () => { audioController.stop();});
volume.addEventListener('input', () => { audioController.setVolume(volume.value);});
timeRange.addEventListener('input', () => { audioController.seek(timeRange.value);});
stepUp.addEventListener('click', () => { audioController.stepForward(STEP);});
stepDown.addEventListener('click', () => { audioController.stepBackward(STEP);});
// audioController.audio.addEventListener('timeupdate', () => { audioController.timeUpdate(); });


function formatSecondsAsTime(secs, format) {
    const hr  = Math.floor(secs / 3600);
    let min = Math.floor((secs - (hr * 3600))/60);
    let sec = Math.floor(secs - (hr * 3600) -  (min * 60));
    
    if (min < 10){ 
        min = "0" + min; 
    }
    if (sec < 10){ 
        sec  = "0" + sec;
    }
    
  return min + ':' + sec;
}

// Audio controller
const audioController = {
    audio: document.getElementById('audio').querySelector('audio'),
    // console.log('success'),


    init() {
        this.audio.volume = 0.5; // Set default volume to 50%
        volume.value = 50;

        this.audio.addEventListener('loadedmetadata', () => {
            countingTimeDownwards.innerHTML = formatSecondsAsTime(this.audio.duration);
            countingTimeUpwards.innerHTML = `00:00`;
            timeRange.value = 0;
        });

        this.audio.addEventListener('timeupdate', () => {
            this.timeUpdate();
        });
    },


    play() {
        this.audio.play();
    },
    
    pause() {
        this.audio.pause();
    },
    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    },

    timeUpdate() {
        const currentTime = this.audio.currentTime;
        const duration = this.audio.duration;
        // countingTimeDownwards.innerHTML = formatSecondsAsTime(duration - currentTime);
        // remainingTime.innerHTML = Math.floor((duration - currentTime) / 60);
        
        if (isNaN(currentTime) || isNaN(duration)) {
            countingTimeDownwards.innerHTML = '00:00';
            countingTimeUpwards.innerHTML = '00:00';
            return;
        } 

        countingTimeDownwards.innerHTML = formatSecondsAsTime(duration - currentTime);
        countingTimeUpwards.innerHTML = formatSecondsAsTime(currentTime);


        timeRange.value = (currentTime / duration) * 100;
        },

        seek(value) {
            this.audio.currentTime = (value / 100) * this.audio.duration;
        },

        stepForward(STEP) {
            this.audio.currentTime = Math.min(this.audio.currentTime + STEP, this.audio.duration);
        },

        stepBackward() {
            this.audio.currentTime = Math.max(this.audio.currentTime - STEP, 0);
        },

        setVolume(value = 50) {
            this.audio.volume = value / 100;
        }
};


audioController.init();