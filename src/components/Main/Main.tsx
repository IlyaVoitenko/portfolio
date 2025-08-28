import Experience from "@/components/Experience";
import Section from "@/components/Section";
import Sidebar from "@/components/Sidebar";
import Animation from "@/components/Animation";
import styles from "./Main.module.scss";
const Main = () => {
  return (
    <div className={`${styles.container}`}>
      <Sidebar />
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
            <p className={styles.paragraph}>Projects go here.</p>
          </Section>
        </Animation>
      </main>
    </div>
  );
};

export default Main;
