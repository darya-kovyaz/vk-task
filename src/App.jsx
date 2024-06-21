import { React, useRef, useEffect } from "react";
import { AppRoot, Div } from "@vkontakte/vkui";
import { observer } from "mobx-react-lite";

import store from "./store";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

import song from "./music/song.mp3";

const App = observer(() => {
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = new Audio(song);
        audioRef.current = audio;

        const setAudioDuration = () => {
            store.setDuration(audio.duration);
            store.setCurrentTime(audio.duration);
        };

        const updateCurrentTime = () => {
            store.setCurrentTime(audio.currentTime);
        };

        const handleEnded = () => {
            store.setIsPlaying(false);
        };

        audio.addEventListener("timeupdate", updateCurrentTime);
        audio.addEventListener("loadedmetadata", setAudioDuration);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("timeupdate", updateCurrentTime);
            audio.removeEventListener("loadedmetadata", setAudioDuration);
            audio.removeEventListener("ended", handleEnded);
        };
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <AppRoot>
            <Div className="main-container">
                <Div className="card-container">
                    <Left
                        playSound={() => store.playSound(audioRef)}
                        isPlaying={store.isPlaying}
                        stopSound={() => store.stopSound(audioRef)}
                    />
                    <Middle />
                    <Right currentTime={formatTime(store.currentTime)} />
                </Div>
            </Div>
        </AppRoot>
    );
});

export default App;
