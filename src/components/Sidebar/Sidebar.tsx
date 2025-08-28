"use client";
import Link from "next/link";
import gitIcon from "../../assets/icons8-github.svg";
import instagramIcon from "../../assets/icons8-instagram.svg";
import linkedin from "../../assets/icons8-linkedin.svg";
import Image from "next/image";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <div>
        <h1 className={styles.userName}>Your Name</h1>
        <p className={styles.roleUser}>Front End Engineer</p>
        <nav className={styles.navLinks}>
          <Link href="#about" className={styles.navLink}>
            About
          </Link>
          <a href="#experience" className={styles.navLink}>
            Experience
          </a>
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
        </nav>
      </div>
      <div className={styles.networkLinks}>
        <Link href="https://github.com/IlyaVoitenko" target="_blank">
          <Image src={gitIcon} alt="GitHub" width={24} height={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/illia-voitenko-71a1bb1b3/"
          target="_blank"
        >
          <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link
          href="https://www.instagram.com/illia_voit?igsh=Yzh3YjdqZTF6bXU1&utm_source=qr"
          target="_blank"
        >
          <Image src={instagramIcon} alt="Instagram" width={24} height={24} />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
