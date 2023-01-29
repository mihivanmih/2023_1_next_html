import React from 'react'
import MainLayout from '../../layots/MainLayout'
import styles from '@/styles/gsap/gsap.module.scss'
import Script from 'next/script'
import Draggable from 'react-draggable'

const Gsap = () => {
    
    return (
        <MainLayout>
            {/*<Script src="/libs/gsap/gsap.min.js" defer />*/}
            {/*<Script src="/libs/gsap/InertiaPlugin.min.js" defer />*/}
            <div className={styles.gsap}>
                <h1>Architecture
                <span>Loading...</span>
                </h1>
                
                <Draggable
                    bounds={'body'}
                >
                    <div>
                        <div className={styles.gallery}  >
                            <div className={styles.gallery__item}><img src="/img/gsap/1.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/2.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/3.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/4.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/5.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/6.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/7.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/8.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/9.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/10.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/11.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/12.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/13.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/14.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/15.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/16.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/17.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/18.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/19.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/20.jpg" alt=""/></div>
                            
                            <div className={styles.gallery__item}><img src="/img/gsap/1.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/2.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/3.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/4.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/5.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/6.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/7.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/8.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/9.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/10.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/11.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/12.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/13.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/14.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/15.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/16.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/17.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/18.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/19.jpg" alt=""/></div>
                            <div className={styles.gallery__item}><img src="/img/gsap/20.jpg" alt=""/></div>
                        </div>
                    </div>
                </Draggable>
                
            </div>
        </MainLayout>
    )
}

export default Gsap
