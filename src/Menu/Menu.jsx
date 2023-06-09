import React from 'react';
import styles from './Menu.module.css'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className={styles.box}>
            <p className={styles.head}>Albanian adventures</p>
            <Link className={styles.item} to='/Gameplay'>Play</Link>
            <Link className={styles.item} to='/Credits'>Credits  & info</Link>
            <Link className={styles.item} to='/Achievments'>Achievments</Link>
        </div>
    );
};

export default Menu;