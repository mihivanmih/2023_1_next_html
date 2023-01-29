import React, {useRef, useState} from 'react';
import styles from '../../styles/navbar.module.scss'
import Link from "next/link";

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const menuLeft = useRef(null);

    const handlerClick = (e:any) => {
        if (!toggle) {
            e.currentTarget?.classList.add(`${styles.open}`)
            setToggle(true)
            menuLeft.current?.classList.add(`${styles.active}`)
        } else {
            e.currentTarget?.classList.remove(`${styles.open}`)
            setToggle(false)
            menuLeft.current?.classList.remove(`${styles.active}`)
        }
    }

    return (
        <>
            <div className={styles.menuIcon} onClick={handlerClick}>
                <span /><span /><span /><span />
            </div>

            <div className={styles.navbar} >
                <div className={styles.menuLeft} ref={menuLeft}>
                    <div className={styles.menuLink}>
                        <a href="/">The Wither</a>
                        <a href="/miami">GTA Vice City</a>
                        <a href="/gsap">GSAP</a>
                        <a href="/portfolio">Portfolio</a>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Navbar;
