import React from 'react';
import styles from './Credits.module.css'
import { Link } from 'react-router-dom';
import about from '../Put-your-novel-here/credits.json'

const Credits = () => {
    return (
        <div className={styles.box}>
            <Link className={styles.back} to={'/'}>Back</Link>
            <p className={styles.item}>
                {about.credits}
            </p>
        </div>
    );
};

export default Credits;