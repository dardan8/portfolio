import React from "react";
import Button from "../components/Button";
import styles from "../src/styles/BottomCTA.module.css";
import Link from "next/link";

import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";

const BottomCTA = () => {
  return (
    <div className={`container`}>
      <div className={styles.cta_container}>
        <h1>Want to learn more about my experience? </h1>
        <p>
          Send me an e-mail at dardan.dara@gmail.com and let’s schedule a call.
        </p>
        <div className={styles.socials}>
          <Link href='mailto:dardan.dara@gmail.com'>
            <Button placeholder='Get in touch' type='button-primary' />
          </Link>
          <Link href='https://www.linkedin.com/in/dardandara/' target='_blank'>
            <RiLinkedinBoxFill className='social-icon' />
          </Link>
          <Link href='https://github.com/dardan8/' target='_blank'>
            <RiGithubFill className='social-icon' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomCTA;
