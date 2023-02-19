import React from "react";
import styles from "../src/styles/Tooltip.module.css";
import { useState } from "react";

const Tooltip = () => {
  const [toolbar, setToolbar] = useState(false);
  return (
    <>
      {toolbar && (
        <div className={styles.tooltip_background}>
          <span className={styles.tooltip_text}>Tooltip Text</span>
        </div>
      )}{" "}
    </>
  );
};
export default Tooltip;
