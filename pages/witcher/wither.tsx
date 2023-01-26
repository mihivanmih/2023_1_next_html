import React, {FC, useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Mousewheel, Parallax} from "swiper";
import 'swiper/css';
import Sound, {transitionStart} from "@/components/sound/sound";
import Head from "next/head";
import Script from 'next/script'

const Wither: FC = () => {

    return (
        <>
            <Script src="/libs/particles/particles.js" defer />
            <Head>
                <title>The wither</title>
            </Head>
            <Sound melody={"/sounds/Priscilla.mp3"}/>
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

export default Wither;

