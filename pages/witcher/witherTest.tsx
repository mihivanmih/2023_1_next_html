import React, {FC, useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Mousewheel, Parallax} from "swiper";
import 'swiper/css';
import Sound, {justAnAlert, pausePlayNew} from "@/components/sound/sound";
import Head from "next/head";
import Script from 'next/script'

const WitreTest: FC = () => {
    const refSound = useRef<HTMLInputElement>()
    const refPlayer = useRef<HTMLInputElement>()

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

        refSound.current?.classList.remove(soundPlayer ? "mute" : "active") // меняем класс для отображения кнопки
        refSound.current?.classList.add(soundPlayer ? "active" : "mute")// меняем класс для отображения кнопки
        refSound.current?.setAttribute('data-sound', soundPlayer ? "1" : "0")

        soundPlayer ? refPlayer.current?.play() : refPlayer.current?.pause()
    }

    const transitionStart = () => {
        refSound.current?.getAttribute('data-click') === "0" ? pausePlay("play") : pausePlay("pause")
    }

    return (
        <>
            <Script src="/libs/particles/particles.js" defer />
            <Head>
                <title>The wither</title>
            </Head>

            <audio id="player" src="/sounds/Priscilla.mp3" ref={refPlayer} />
            <div className="sound mute" data-sound="0" data-click="0" onClick={soundHandler} ref={refSound} />
            <Swiper
                speed={2400}
                parallax={true}
                mousewheel={{
                    sensitivity: 20
                }}
                onSlideChange={() => {
                    transitionStart()
                }}
                modules={[Parallax, Mousewheel]}
                spaceBetween={20}
            >
                <div className={'swiper-wrapper slider__wrapper'}>

                    <SwiperSlide className={'swiper-slide slider__item'}>
                        <div className={'slider__layer'} style={{ backgroundImage: `url(/img/screen-1/layer-back.jpg`}} data-swiper-parallax="35%"> </div>
                        <div className={'slider__layer'} style={{ backgroundImage: `url(/img/screen-1/layer-middle.png`}} data-swiper-parallax="25%"> </div>
                        <canvas className="particles slider__layer" data-swiper-parallax="18%" data-color="#B99970"> </canvas>
                        <div className={'slider__layer'} style={{ backgroundImage: `url(/img/screen-1/layer-front.png`}} data-swiper-parallax="14%"> </div>
                    </SwiperSlide>

                    <SwiperSlide className={'swiper-wrapper slider__item'}>
                        <div className={'slider__layer'} style={{ backgroundImage: `url(/img/screen-2/layer-back.jpg`}} data-swiper-parallax="35%"> </div>
                        <div className={'slider__layer'} style={{ backgroundImage: `url(/img/screen-2/layer-gera.png`}} data-swiper-parallax="34%"> </div>
                        <div className={'slider__layer'} style={{ backgroundImage: `url(/img/screen-2/layer-yen.png`}} data-swiper-parallax="30%"> </div>
                        <canvas className="particles slider__layer" data-swiper-parallax="20%" data-color="#525A6D"> </canvas>
                        <div className={'slider__layer'} style={{ backgroundImage: `url(/img/screen-2/layer-front.png`}} data-swiper-parallax="14%"> </div>
                    </SwiperSlide>

                    <SwiperSlide className={'swiper-wrapper slider__item'}>
                        <div className={'slider__layer'} style={{ backgroundImage: `url(/img/screen-3/layer-back.jpg`}} data-swiper-parallax="35%"> </div>
                        <div className={'slider__layer'} style={{ backgroundImage: `url(/img/screen-3/layer-middle.png`}} data-swiper-parallax="34%"> </div>
                        <div className={'slider__layer'} style={{ backgroundImage: `url(/img/screen-3/layer-ciri.png`}} data-swiper-parallax="30%"> </div>
                        <canvas className="particles slider__layer" data-swiper-parallax="25%" data-color="#938086"> </canvas>
                        <div className={'slider__layer'} style={{ backgroundImage: `url(/img/screen-3/layer-front.png`}} data-swiper-parallax="14%"> </div>
                    </SwiperSlide>

                </div>
            </Swiper>
        </>
    );
};

export default WitreTest;

