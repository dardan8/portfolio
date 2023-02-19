import React from "react";

import { SlMouse } from "react-icons/sl";
import { ImArrowDown2 } from "react-icons/im";

import styles from "../src/styles/ScrollElement.module.css";

const ScrollElement = () => {
  return (
    <div>
      <span className={styles.scroll_wrapper}>
        <SlMouse className={styles.scrollicon} /> Scroll down
        <ImArrowDown2 className={styles.scrollarrow} />
      </span>
    </div>
  );
};

export default ScrollElement;
