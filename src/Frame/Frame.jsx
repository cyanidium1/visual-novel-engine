import React from 'react';
import styles from './Frame.module.css'
import Button from '../UI/Button.jsx'
import { Link } from 'react-router-dom';

const Frame = (props) => {

    return (
        <div className={styles.box}>
            <Link className={styles.back} to={'/'}>Back</Link>
            <div className={styles.textBox}>
                <p className={styles.text}>{props.text.p}</p>
                <div className={styles.buttonBox}>
                    <Button text={props.text.b1} b={props.b1}/>
                    <Button text={props.text.b2} b={props.b2}/>
                    <Button text={props.text.b3} b={props.b3}/>
                    <Button text={'Move back'} b={props.tb}/>
                </div>
            </div>
        </div>
    );
};
 
export default Frame;