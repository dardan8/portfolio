import Link from "next/link";
import styles from "../src/styles/Navbar.module.css";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className={styles.navigation_container}>
      <Link href='/#'>
        {" "}
        <div className={styles.logo_placeholder}>Dardan D.</div>
      </Link>
      <nav className={styles.navigation_items}>
        <Link href='/#tools'>Tools</Link>
        <Link href='/#projects'>Projects</Link>
        <Link href='/experience'>Experience</Link>
        <Link href='mailto: dardan.dara@gmail.coom'>
          <Button placeholder='Get in touch' type='button-primary' icon='' />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
