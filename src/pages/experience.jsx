import React from "react";
import styles from "../../src/styles/Experience.module.css";
import Image from "next/image";
import Button from "components/Button";
import Link from "next/link";

const Experience = () => {
  return (
    <div className={styles.experience_container}>
      <p>This page is under construction.</p>
      <p>Be back soon or contact me to get my CV.</p>
      <Link href='mailto: dardan.dara@gmail.coom'>
        <Button type='button-primary' placeholder='Get in touch' />{" "}
      </Link>
      <Image src='/images/Under_Construction.jpg' width={500} height={500} />
    </div>
  );
};

export default Experience;
