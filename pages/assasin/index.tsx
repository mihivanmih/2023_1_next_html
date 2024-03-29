import React, {useRef} from 'react';
import MainLayout from "@/layots/MainLayout";
import { Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from '@/styles/assasin/assasin.module.scss'
import 'swiper/css';


const Assasin = () => {
    const swiperRef = useRef();
    return (
        <MainLayout title={"Assasin's Creed"} className={`${styles.auth}`}>
            <div className="wrapper">
                <div className="content">
                    <div className={styles.assasin}>

                        <div className={styles.showcase}>

                            <h2 className={styles.header}>Hoodie <span>Mantle</span></h2>

                            <div className={styles.contentWrapper}>
                                <div className={styles.content}>

                                    <div className={styles.carousel}>
                                        <Swiper
                                            loop={true}
                                            slidesPerView={3}
                                            speed={1800}
                                            centeredSlides={true}
                                            modules={[Navigation]}
                                            onBeforeInit={(swiper) => {
                                                swiperRef.current = swiper;
                                            }}
                                        >
                                            <SwiperSlide className={styles.Slide}>
                                                <div className={styles.imageWrapper}>
                                                 <div className={styles.imageLeft}>
                                                        <div className={styles.crouselImg} style={{ backgroundImage: `url(/img/assasin/1.png`}}>

                                                        </div>
                                                    </div>
                                                  <div className={styles.imageRight}>
                                                      <div className={styles.crouselImg} style={{ backgroundImage: `url(/img/assasin/1.png`}}>

                                                      </div>
                                                    </div>
                                                </div>
                                                <p>Front</p>
                                            </SwiperSlide>
                                            <SwiperSlide className={styles.Slide}>
                                                <div className={styles.imageWrapper}>
                                                 <div className={styles.imageLeft}>
                                                        <div className={styles.crouselImg} style={{ backgroundImage: `url(/img/assasin/2.png`}}>

                                                        </div>
                                                    </div>
                                                  <div className={styles.imageRight}>
                                                      <div className={styles.crouselImg} style={{ backgroundImage: `url(/img/assasin/2.png`}}>

                                                      </div>
                                                    </div>
                                                </div>
                                                <p>Front 2</p>
                                            </SwiperSlide>
                                            <SwiperSlide className={styles.Slide}>
                                                <div className={styles.imageWrapper}>
                                                 <div className={styles.imageLeft}>
                                                        <div className={styles.crouselImg} style={{ backgroundImage: `url(/img/assasin/3.png`}}>

                                                        </div>
                                                    </div>
                                                  <div className={styles.imageRight}>
                                                      <div className={styles.crouselImg} style={{ backgroundImage: `url(/img/assasin/3.png`}}>

                                                      </div>
                                                    </div>
                                                </div>
                                                <p>Side</p>
                                            </SwiperSlide>
                                            <SwiperSlide className={styles.Slide}>
                                                <div className={styles.imageWrapper}>
                                                 <div className={styles.imageLeft}>
                                                        <div className={styles.crouselImg} style={{ backgroundImage: `url(/img/assasin/4.png`}}>

                                                        </div>
                                                    </div>
                                                  <div className={styles.imageRight}>
                                                      <div className={styles.crouselImg} style={{ backgroundImage: `url(/img/assasin/4.png`}}>

                                                      </div>
                                                    </div>
                                                </div>
                                                <p>Back</p>
                                            </SwiperSlide>
                                        </Swiper>

                                    </div>

                                </div>

                                <div className={styles.navigation}>
                                    <div className={styles.prev} onClick={() => swiperRef.current?.slidePrev()} >

                                    </div>
                                    <div className={styles.next} onClick={() => swiperRef.current?.slideNext()} >

                                    </div>
                                </div>

                            </div>
                            <video src="/assasin/videos/smoke-background-optimized.mp4" className={styles.video} autoPlay loop muted />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Assasin;
