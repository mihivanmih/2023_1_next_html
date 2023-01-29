import React, {FC} from 'react';
import MainLayout from "@/layots/MainLayout";
import Swiper, {Controller, FreeMode, Mousewheel} from 'swiper';
import 'swiper/css';
import styles from '@/styles/portfolio/portfolio.module.scss'

function bindSwipers(...swiperList) {
    for (const swiper of swiperList) {
        swiper.setTranslate = function(translate: any, byController: any, doNotPropagate: any) {
            if (doNotPropagate) {
                Swiper.prototype.setTranslate.apply(this, arguments)
            } else {
                for (const swiper of swiperList) {
                    swiper.setTranslate(translate, byController, true)
                }
            }
        }
        swiper.setTransition = function(duration: any, byController: any, doNotPropagate: any) {
            if (doNotPropagate) {
                Swiper.prototype.setTransition.apply(this, arguments)
            } else {
                for (const swiper of swiperList) {
                    swiper.setTransition(duration, byController, true)
                }
            }
        }
    }
}

const Portfolio: FC = () => {

    const options = {
        freeMode: true,
        speed: 120,
        centeredSlides: true,
        direction: 'vertical',
        mousewheel: true,
        modules: [ Mousewheel, Controller, FreeMode],
        slidesPerView: 1.75,
        slidesOffsetBefore: -125
    }

    const swiper = new Swiper('.slider1', options)
    const swiper2 = new Swiper('.slider2', options)
    const swiper3 = new Swiper('.slider3', options)
    const swiper4 = new Swiper('.slider4', options)

    bindSwipers(swiper, swiper2, swiper3, swiper4)

    return (
        <>
            <MainLayout title={`Slider Portfolio`} title={'Портфолио'}>
                <div className={styles.sliderContent}>

                    <div className={`${styles.slide} swiper slider slider1`} >
                        <div className={`${styles.swiperWrapper} swiper-wrapper slider__wrapper`}>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/1.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/2.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/3.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/4.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/5.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/6.jpg`}} />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.slide} swiper slider slider2`} >
                        <div className={`${styles.swiperWrapper} swiper-wrapper slider__wrapper`}>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/7.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/8.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/9.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/10.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/11.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/12.jpg`}} />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.slide} swiper slider slider3`} >
                        <div className={`${styles.swiperWrapper} swiper-wrapper slider__wrapper`}>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/13.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/14.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/15.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/16.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/17.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/18.jpg`}} />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.slide} swiper slider slider4`} >
                        <div className={`${styles.swiperWrapper} swiper-wrapper slider__wrapper`}>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/19.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/20.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/21.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/22.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/23.jpg`}} />
                            </div>
                            <div className={`${styles.sliderItem} ${styles.swiperWrapper} swiper-slide`}>
                                <div className={styles.sliderLayer} style={{backgroundImage: `url(/img/portfolio/24.jpg`}} />
                            </div>
                        </div>
                    </div>


                </div>
            </MainLayout>
        </>
    );
};

export default Portfolio;
