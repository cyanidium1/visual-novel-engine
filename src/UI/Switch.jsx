import React from "react";
import styles from './Switch.module.css'

const Switch = (props) => {
  return (
    <div>
      <label onClick={console.log('kjek')} className={styles.switch}>
        <input type='checkbox' onClick={console.log('kjek')}/>
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default Switch;
