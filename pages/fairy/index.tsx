import React, {FC, useEffect, useState} from 'react';
import MainLayout from '@/layots/MainLayout';
import styles from '@/styles/fairy/fairy.module.scss'




const Witcher: FC = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset)
        // clean up code
        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    if (typeof document === 'undefined') {
        // during server evaluation
    } else {
        const bodyCss = document.querySelector('body')

        bodyCss.style.setProperty(
            "--scrollTop",
            `${offset}px`
        )
    }



    return (
        <>
            <MainLayout title={'Fairy forest'}>
                <div className={styles.fairy}>
                    <header className={styles.mainHeader}>
                        <div className={styles.layers}>
                            <div className={styles.header}>
                                <div className={styles.caption}>
                                    Welcome to Parallax
                                </div>
                                <div className={styles.title}>
                                    Fairy Forest
                                </div>
                            </div>
                            <div className={`${styles.layer} ${styles.layer_base}`} style={{backgroundImage: `url('/img/fairy/layer-base.png')`}}> </div>
                            <div className={`${styles.layer}  ${styles.layer_middle}`} style={{backgroundImage: `url('/img/fairy/layer-middle.png')`}}> </div>
                            <div className={`${styles.layer}  ${styles.layer_front}`} style={{backgroundImage: `url('/img/fairy/layer-front.png')`}}> </div>
                        </div>
                    </header>

                    <article className={styles.main} style={{backgroundImage: `url('/img/fairy/dungeon.jpg')`}}>
                        <div className={"content"}>
                            <h2 className={"header"}>To be continued</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem beatae culpa dicta dignissimos dolorum ipsa iste laboriosam, magnam, molestiae non numquam optio placeat praesentium soluta. A dolore eaque minima molestiae quam!</p>
                        </div>

                        <div className={"copy"}>© WebDesign Master</div>
                    </article>
                </div>

            </MainLayout>
        </>
    );
};

export default Witcher;

