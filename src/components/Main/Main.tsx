import Experience from "@/components/Experience";
import Section from "@/components/Section";
import Sidebar from "@/components/Sidebar";
import Animation from "@/components/Animation";
import styles from "./Main.module.scss";
import Projects from "@/components/Projects";
import UserInfo from "@/components/UserInfo";
import Link from "next/link";
import Image from "next/image";

import gitIcon from "../../assets/icons8-github.svg";
import instagramIcon from "../../assets/icons8-instagram.svg";
import linkedin from "../../assets/icons8-linkedin.svg";

const Main = () => {
  return (
    <div className={`${styles.container}`}>
      <Sidebar />
      <UserInfo />
      <main className={`${styles.containerContent}`}>
        <Animation>
          <Section id="about" title="About">
            <p className={styles.paragraph}>
              Versatile frontend and full-stack developer with solid experience
              in building powerful, secure and user- oriented applications.
              In-depth knowledge of React, Redux toolkit and other full stack
              technologies. I place great value on a seamless user experience
              while optimizing for speed and reliability. Experienced in working
              with interdisciplinary teams to ensure that each project meets
              both technical standards and business objectives.
            </p>
          </Section>
        </Animation>
        <Animation>
          <Section id="experience" title="Experience">
            <Experience />
          </Section>
        </Animation>
        <Animation>
          <Section id="projects" title="Projects">
            <Projects />
          </Section>
        </Animation>
      </main>
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
    </div>
  );
};

export default Main;
