import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import about from "../Put-your-novel-here/credits.json";

const Menu = () => {

  return (
    <div className={styles.box}>
      <p className={styles.head}>{about.name}</p>
      <Link className={styles.item} to="/Gameplay">
        <span>Play</span>
        <i></i>
      </Link>
      <Link className={styles.item} to="/Credits">
        Credits & info
      </Link>
      <Link className={styles.item} to="/Achievments">
        Achievments
      </Link>
    </div>
  );
};

export default Menu;
