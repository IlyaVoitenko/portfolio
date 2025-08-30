"use client";
import Link from "next/link";
import gitIcon from "../../assets/icons8-github.svg";
import instagramIcon from "../../assets/icons8-instagram.svg";
import linkedin from "../../assets/icons8-linkedin.svg";
import Image from "next/image";
import styles from "./Sidebar.module.scss";
import { withActiveSection } from "@/hook/withActiveSection";
import { sideBarConfig } from "@/hook/useActiveSection";
import React from "react";
const sections = ["about", "experience", "projects"];

const Sidebar = ({ activeSection }: { activeSection: string }) => {
  return (
    <aside className={styles.container}>
      <div>
        <h1 className={styles.userName}>Your Name</h1>
        <p className={styles.roleUser}>Front End Engineer</p>
        <nav className={styles.navLinks}>
          {sections.map((section) => (
            <div key={section} className={styles.navItem}>
              <hr
                className={
                  activeSection === section
                    ? styles.dividerActive
                    : styles.divider
                }
              />
              <Link
                href={`#${section}`}
                className={`${
                  activeSection === section
                    ? styles.navLinkActive
                    : styles.navLink
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </div>
          ))}
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

export default withActiveSection(Sidebar, sections, sideBarConfig);
