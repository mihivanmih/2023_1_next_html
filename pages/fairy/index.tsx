import React, {FC} from 'react';
import MainLayout from '@/layots/MainLayout';
import styles from '@/styles/fairy/fairy.module.scss'

const Witcher: FC = () => {

    return (
        <>
            <MainLayout title={'Fairy forest'}>
                <div className={styles.fairy}>
                    <header className={styles.mainHeader}>
                        <div className={styles.layers}>
                            <div className="header">
                                <div className="caption">
                                    Welcome to Parallax
                                </div>
                                <div className="title">
                                    Fairy Forest
                                </div>
                            </div>
                            <div className={styles.layer} style={{backgroundImage: `url('/img/fairy/layer-base.png')`}}> </div>
                            <div className={styles.layer} style={{backgroundImage: `url('/img/fairy/layer-middle.png')`}}> </div>
                            <div className={styles.layer} style={{backgroundImage: `url('/img/fairy/layer-front.png')`}}> </div>
                        </div>
                    </header>

                    <article className={"main"}>
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

