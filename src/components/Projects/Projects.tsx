import { projects } from "@/data/projects.data";
import styles from "./Projects.module.scss";
import Link from "next/link";
import Image from "next/image";
import SkillsList from "../SkillsList";
const Projects = () => {
  return (
    <nav className={styles.projectList}>
      {projects &&
        projects.map((project) => (
          <div key={project.id} className={styles.projectItem}>
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={100}
              className={styles.projectImage}
              loading="lazy"
            />
            <div className={styles.projectContent}>
              <Link
                href={project.link}
                target="_blank"
                className={styles.projectTitle}
              >
                {project.title}
              </Link>
              <p className={styles.projectDescription}>{project.description}</p>
              <SkillsList skills={project.stack} />
            </div>
          </div>
        ))}
    </nav>
  );
};

export default Projects;
