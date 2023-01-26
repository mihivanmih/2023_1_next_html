import React, {FC, useEffect, useRef, useState} from 'react';
import style from '../../styles/sound.module.scss'


export const transitionStart = () => {
    console.log("xxx")
}

interface SoundProps {
    melody: string;
}

const Sound: FC<SoundProps> = ({melody}) => {
    const refSound = useRef<HTMLInputElement>(null)
    const refPlayer = useRef<HTMLInputElement>(null)

    const soundHandler = () => {
        const soundMute = refSound.current?.dataset.sound

        if( soundMute === "0"){
            refSound.current?.setAttribute('data-click', '0')
            pausePlay("play")
        } else {
            refSound.current?.setAttribute('data-click', '1')
            pausePlay("pause")
        }
    }

    // включение, выключение звука
     const pausePlay = (tune: string) => {
        const soundPlayer = tune === "play"

        refSound.current?.classList.remove(soundPlayer ? `${style.mute}` : `${style.active}`) // меняем класс для отображения кнопки
        refSound.current?.classList.add(soundPlayer ? `${style.active}` : `${style.mute}`)// меняем класс для отображения кнопки
        refSound.current?.setAttribute('data-sound', soundPlayer ? "1" : "0")

        soundPlayer ? refPlayer.current?.play() : refPlayer.current?.pause()
    }

    return (
        <>
            <audio id="player" src={melody} ref={refPlayer} />
            <div className={`${style.sound} ${style.mute}`} data-sound="0" data-click="0" onClick={soundHandler} ref={refSound} />
        </>
    );
};

export default Sound;
