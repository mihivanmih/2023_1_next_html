import React, {FC, useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Mousewheel, Parallax} from "swiper";
import 'swiper/css';
import Sound, {transitionStart} from "@/components/sound/sound";
import Head from "next/head";
import Script from 'next/script'
import styles from '@/styles/witcher/Witcher.module.scss'

const Witcher: FC = () => {
    const refSound = useRef<HTMLInputElement>(null)
    const refPlayer = useRef<HTMLInputElement>(null)

    return (
        <>
            <Script src="/libs/particles/particles.js" />
            <Head>
                <title>The wither</title>
            </Head>
            <Sound melody={"/sounds/Pesnya_Priscilly.mp3"} refSound={refSound} refPlayer={refPlayer}/>
            <Swiper
                speed={2400}
                parallax={true}
                mousewheel={{
                    sensitivity: 20
                }}
                onSliderFirstMove={() => {
                    transitionStart(refPlayer, refSound)
                }}
                modules={[Parallax, Mousewheel]}
                spaceBetween={20}
                className={styles.swiper}
            >
                {/*<div className={'swiper-wrapper slider__wrapper'} >*/}
                <div className={styles.swiperWrapper}>

                    <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}>
                        <div className={styles.sliderLayer} style={{ backgroundImage: `url(/img/screen-1/layer-back.jpg`}} data-swiper-parallax="35%"> </div>
                        <div className={styles.sliderLayer} style={{ backgroundImage: `url(/img/screen-1/layer-middle.png`}} data-swiper-parallax="25%"> </div>
                        <canvas className={`particles ${styles.sliderLayer})`} data-swiper-parallax="18%" data-color="#B99970"> </canvas>
                        <div className={styles.sliderLayer} style={{ backgroundImage: `url(/img/screen-1/layer-front.png`}} data-swiper-parallax="14%"> </div>
                    </SwiperSlide>

                    <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}>
                        <div className={styles.sliderLayer} style={{ backgroundImage: `url(/img/screen-2/layer-back.jpg`}} data-swiper-parallax="35%"> </div>
                        <div className={styles.sliderLayer} style={{ backgroundImage: `url(/img/screen-2/layer-gera.png`}} data-swiper-parallax="34%"> </div>
                        <div className={styles.sliderLayer} style={{ backgroundImage: `url(/img/screen-2/layer-yen.png`}} data-swiper-parallax="30%"> </div>
                        <canvas className={`particles ${styles.sliderLayer})`} data-swiper-parallax="20%" data-color="#525A6D"> </canvas>
                        <div className={styles.sliderLayer} style={{ backgroundImage: `url(/img/screen-2/layer-front.png`}} data-swiper-parallax="14%"> </div>
                    </SwiperSlide>

                    <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}>
                        <div className={styles.sliderLayer} style={{ backgroundImage: `url(/img/screen-3/layer-back.jpg`}} data-swiper-parallax="35%"> </div>
                        <div className={styles.sliderLayer} style={{ backgroundImage: `url(/img/screen-3/layer-middle.png`}} data-swiper-parallax="34%"> </div>
                        <div className={styles.sliderLayer} style={{ backgroundImage: `url(/img/screen-3/layer-ciri.png`}} data-swiper-parallax="30%"> </div>
                        <canvas className={`particles ${styles.sliderLayer})`} data-swiper-parallax="25%" data-color="#938086"> </canvas>
                        <div className={styles.sliderLayer} style={{ backgroundImage: `url(/img/screen-3/layer-front.png`}} data-swiper-parallax="14%"> </div>
                    </SwiperSlide>

                </div>
            </Swiper>
        </>
    );
};

export default Witcher;

