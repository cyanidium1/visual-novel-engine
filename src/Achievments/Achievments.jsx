import React from "react";
import styles from "./Achievments.module.css";
import { Link } from "react-router-dom";

const Achievments = () => {
  return (
    <div className={styles.box}>
      <Link className={styles.back} to={"/"}>
        Back
      </Link>
      <p className={styles.item}>List of achievments should be here</p>
    </div>
  );
};

export default Achievments;
