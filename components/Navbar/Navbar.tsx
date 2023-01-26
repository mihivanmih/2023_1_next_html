import React from 'react';
import style from '../../styles/Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.menuIcon}> </div>
            <div className={style.menuLeft}></div>
        </div>
    );
};

export default Navbar;
