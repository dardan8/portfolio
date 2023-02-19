import React from "react";
import styles from "../src/styles/ProjectCard.module.css";
import Button from "./Button.jsx";
import Link from "next/link";
import { RiGithubFill } from "react-icons/ri";

const ProjectCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img src={props.image} />
      </div>
      <div className={styles.card_content}>
        <span className={styles.card_tags}>{props.technologies} </span>
        <h5 className={styles.card_title}>{props.title}</h5>
        <p className={styles.card_bodytext}>{props.description}</p>

        <div className={styles.card_buttons}>
          <Link href={props.source} target='_blank'>
            <Button
              placeholder='Source Code'
              type='button-primary'
              icon={<RiGithubFill className='button-primary-icon' />}
            />
          </Link>
          <Link href={props.url} target='_blank'>
            <Button placeholder='View Live' type='button-secondary' icon='' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
