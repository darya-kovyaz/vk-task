import { Group, Button, Div } from "@vkontakte/vkui";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import coverImage from "./img/for-you.png";
import { Icon20GraphOutline, Icon24PauseCircleFillWhite, Icon24PlayCircleFillWhite } from "@vkontakte/icons";

const Left = observer(({ playSound, stopSound, isPlaying }) => {
    // isBtnHovered allows us to control 'cover-background' via clicking the play/pause button
    const [isBtnHovered, setIsBtnHovered] = useState(false);

    return (
        <Group mode="plain" separator="hide" className="left--group">
            <img src={coverImage} alt="coverImage" className="left--img" />

            <Div
                className={"cover-background " + (!isPlaying && !isBtnHovered ? "cover-background--hidden" : "")}
                style={{ transition: "all", transitionDuration: "200ms" }}
            >
                {isPlaying ? <Icon20GraphOutline className="icon-style--20" /> : <></>}
            </Div>

            <Button
                mode="secondary"
                appearance="overlay"
                className="btn-circle"
                hoverClassName="btn-circle--hover"
                style={{ transition: "all", transitionDuration: "300ms" }}
                onMouseEnter={() => {
                    setIsBtnHovered(true);
                }}
                onMouseLeave={() => {
                    setIsBtnHovered(false);
                }}
                onClick={isPlaying ? stopSound : playSound}
            >
                {isPlaying ? (
                    <Icon24PauseCircleFillWhite fill="#202020" className="icon-style--24" />
                ) : (
                    <Icon24PlayCircleFillWhite fill="#202020" className="icon-style--24" />
                )}
            </Button>
        </Group>
    );
});

export default Left;
