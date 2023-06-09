import React from 'react';
import styles from './Button.module.css'

const Button = (props) => {

    if (props.text === '') {
        return
    }

    return (
        <button onClick={props.b} className={styles.button}>
            {props.text}
        </button>
    );
};

export default Button;