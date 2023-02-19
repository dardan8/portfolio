import React from "react";
import styles from "../src/styles/Header.module.css";
import ScrollElement from "../components/ScrollElement";
import Image from "next/image";
const Header = () => {
  return (
    <div className={`container ${styles.dot_bg}`}>
      <div className={styles.header_leftside}>
        <h1 className={styles.h1title}>
          Hi <span className={styles.hi_icon}>👋</span>
        </h1>
        <h2 className={styles.h2title}>
          I’m Dardan, <span className='highlight1'>Frontend Developer.</span>{" "}
          Experienced in UI/UX Design. Helping build your digital products.
          <span className='highlight2'>Let's get in touch. </span>
        </h2>
        <ScrollElement />
      </div>

      <div className={styles.header_rightside}>
        <Image
          src='/images/Portfolio-Hero-Image.png'
          alt='Portfolio Photograph'
          className={styles.header_graphic}
          width={500}
          height={500}
        />
        <img src='images/bg-blurry.webp' className={styles.headerbackground} />
      </div>
    </div>
  );
};

export default Header;
