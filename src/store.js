import { makeAutoObservable } from "mobx";

class AudioStore {
    currentTime = 0;
    duration = 0;
    isPlaying = false;

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentTime(time) {
        this.currentTime = time;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    setIsPlaying(isPlaying) {
        this.isPlaying = isPlaying;
    }

    playSound(audioRef) {
        if (audioRef.current) {
            audioRef.current.play();
            this.setIsPlaying(true);
        }
    }

    stopSound(audioRef) {
        if (audioRef.current && this.isPlaying) {
            audioRef.current.pause();
            this.setCurrentTime(audioRef.current.currentTime);
            this.setIsPlaying(false);
        }
    }
}

const store = new AudioStore();
export default store;
