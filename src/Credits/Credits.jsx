import React from 'react';
import styles from './Credits.module.css'
import { Link } from 'react-router-dom';

const Credits = () => {
    return (
        <div className={styles.box}>
            <Link className={styles.back} to={'/'}>Back</Link>
            <p className={styles.item}>
                Credits information should be here
            </p>
        </div>
    );
};

export default Credits;