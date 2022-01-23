import React from 'react';

import styles from './navbar.module.scss';
const {main, navItem} = styles;

const Navbar = () => {
    return (
       
         <main className={main}>
            <div className={navItem}>Home</div>
            <div className={navItem}>About</div>
            <div className={navItem}>Skills</div>
            <div className={navItem}>Projects</div>
            <div className={navItem}>Connect</div>
        </main>
       
    )
}

export default Navbar;