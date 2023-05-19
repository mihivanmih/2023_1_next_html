import React from 'react';
import MainLayout from "@/layots/MainLayout";
import styles from '@/styles/assasin/assasin.module.scss'


const Assasin = () => {
    return (
        <MainLayout title={"Assasin's Creed"} className={`${styles.auth}`}>
            <div className="wrapper">
                <div className="content">
                    <div className={styles.assasin}>
                        <div className={styles.showcase}>
                            <div className={styles.contentWrapper}>
                                <div className={styles.content}>

                                    asdas

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
