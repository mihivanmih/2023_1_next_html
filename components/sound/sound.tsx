import React, {FC, useEffect, useRef, useState} from 'react';
import style from '../../styles/sound.module.scss'

interface SoundProps {
    melody: string;
    refSound: any;
    refPlayer: any;
}

// свайп
export const transitionStart = (refPlayer, refSound) => {
     refSound.current?.getAttribute('data-click') === "0" ? pausePlay("play", refPlayer, refSound) : pausePlay("pause", refPlayer, refSound)
}

// включение, выключение звука
const pausePlay = (tune, refPlayer, refSound) => {
    const soundPlayer = tune === "play"

    refSound.current?.classList.remove(soundPlayer ? `${style.mute}` : `${style.active}`) // меняем класс для отображения кнопки
    refSound.current?.classList.add(soundPlayer ? `${style.active}` : `${style.mute}`)// меняем класс для отображения кнопки
    refSound.current?.setAttribute('data-sound', soundPlayer ? "1" : "0")

    soundPlayer ? refPlayer.current?.play() : refPlayer.current?.pause()
}

const Sound: FC<SoundProps> = ({melody, refSound, refPlayer}) => {

    const soundHandler = () => {
        const soundMute = refSound.current?.dataset.sound

        if( soundMute === "0"){
            refSound.current?.setAttribute('data-click', '0')
            pausePlay("play", refPlayer, refSound)
        } else {
            refSound.current?.setAttribute('data-click', '1')
            pausePlay("pause", refPlayer, refSound)
        }
    }

    return (
        <>
            <audio id="player" src={melody} ref={refPlayer} />
            <div className={`${style.sound} ${style.mute}`} data-sound="0" data-click="0" onClick={soundHandler} ref={refSound} />
        </>
    );
};

export default Sound;
