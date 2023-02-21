import React, {FC, useRef, useState} from 'react';
import MainLayout from "@/layots/MainLayout";
import styles from '@/styles/miami/Miami.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {Controller, FreeMode, Mousewheel, Parallax} from "swiper";
import Sound, {transitionStart} from "@/components/sound/sound";
import Head from "next/head";

const Miami: FC = () => {

    const [controlledSwiper, setControlledSwiper] = useState(null)
    const [toggle, setToggle] = useState(false);
    const oneSlideTextRef = useRef<HTMLDivElement>(null);
    const refSound = useRef<HTMLInputElement>(null)
    const refPlayer = useRef<HTMLInputElement>(null)

    const handlerClick = (e:any) => {
        if (!toggle) {
            e.currentTarget?.classList.add(`${styles.opened}`)
            setToggle(true)
        } else {
            e.currentTarget?.classList.remove(`${styles.opened}`)
            setToggle(false)
        }
    }

    const OneSlideShowHidden = (status: boolean) => {
        if (status) {
            oneSlideTextRef.current?.classList.add(`${styles.hidden}`)
        } else {
            oneSlideTextRef.current?.classList.remove(`${styles.hidden}`)
        }
    }

    // @ts-ignore
    return (
        <>
            <Sound melody={"/sounds/vice_city.mp3"} refSound={refSound} refPlayer={refPlayer}/>
            <MainLayout title={'Grand Theft Auto: Vice City'}>
                <div className={`miami ${styles.miami}`}>

                    <div className={styles.description} ref={oneSlideTextRef}>
                        <div className={styles.logo}>Grand Theft Auto: Vice City</div>
                        <p>Добро пожаловать в Город Порока - Vice City, огромный людской муравейник, где есть все:
                            золотые пляжи и зловонные болота, блеск и нищета, дворцы и трущобы. Самый громкий хит
                            года, Vice City позволит вам заглянуть в яркий, полный черного юмора и насилия
                            преступный мир гигантского мегаполиса, чрезвычайно напоминающего Майами. Теперь и у вас
                            есть шанс пройти путь от обычного уличного вышибалы до представителя элиты преступного
                            мира. Прибыв в мегаполис, полный соблазнов и наслаждений, главный герой Томми Версетти
                            теряет все в первой же сделке. Он хочет получить назад свои деньги, но на его пути
                            встают банды байкеров, кубинские гангстеры и продажные политики. Похоже, весь Vice City
                            ополчился против Томми. Остается только одно: отвечать ударом на удар - и, в конце
                            концов, прибрать город к рукам!</p>
                    </div>

                    <Swiper
                        freeMode={true}
                        speed={120}
                        mousewheel={true}
                        centeredSlides={true}
                        modules={[Parallax, Mousewheel, Controller, FreeMode]}
                        parallax={true}
                        controller={{control: controlledSwiper}}
                        breakpoints={{
                            0: {
                                slidesPerView: 2.5,
                                spaceBetween: 20
                            },
                            680: {
                                slidesPerView: 3.5,
                                spaceBetween: 60
                            }
                        }}
                        onSlideChange={(swiperCore) => {
                            swiperCore.activeIndex > 0 ? OneSlideShowHidden(true) : OneSlideShowHidden(false)
                        }}
                        onSliderFirstMove={() => {
                            transitionStart(refPlayer, refSound)
                        }}
                        className={styles.slider}
                    >
                        <div className={styles.sliderWrapper}>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}
                                         onClick={handlerClick}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/1.png`}}
                                     data-swiper-parallax="20%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}
                                         onClick={handlerClick}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/2.jpg`}}
                                     data-swiper-parallax="30%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}
                                         onClick={handlerClick}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/3.jpg`}}
                                     data-swiper-parallax="20%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}
                                         onClick={handlerClick}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/4.jpg`}}
                                     data-swiper-parallax="30%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}
                                         onClick={handlerClick}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/5.jpg`}}
                                     data-swiper-parallax="20%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}
                                         onClick={handlerClick}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/6.png`}}
                                     data-swiper-parallax="30%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}
                                         onClick={handlerClick}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/7.jpg`}}
                                     data-swiper-parallax="20%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}
                                         onClick={handlerClick}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/8.jpg`}}
                                     data-swiper-parallax="30%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}
                                         onClick={handlerClick}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/9.jpg`}}
                                     data-swiper-parallax="20%"/>
                            </SwiperSlide>

                        </div>
                    </Swiper>


                    <Swiper
                        mousewheel={true}
                        modules={[Parallax, Controller]}
                        parallax={true}
                        spaceBetween={60}
                        slidesPerView={3.5}
                        onSwiper={setControlledSwiper}
                        className={styles.bg}
                    >
                        <div className={styles.sliderWrapper}>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/1.jpg`}}
                                     data-swiper-parallax="20%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/2.jpg`}}
                                     data-swiper-parallax="30%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/3.jpg`}}
                                     data-swiper-parallax="20%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/4.jpg`}}
                                     data-swiper-parallax="30%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/5.jpg`}}
                                     data-swiper-parallax="20%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/6.jpg`}}
                                     data-swiper-parallax="30%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/7.jpg`}}
                                     data-swiper-parallax="20%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/8.jpg`}}
                                     data-swiper-parallax="30%"/>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.sliderItem} ${styles.swiperWrapper}`}>
                                <div className={styles.sliderLayer}
                                     style={{backgroundImage: `url(/img/miami/9.jpg`}}
                                     data-swiper-parallax="20%"/>
                            </SwiperSlide>

                        </div>
                    </Swiper>


                </div>
            </MainLayout>
        </>
    );
};

export default Miami;
