import { experiences } from "../../data/experience.data";
import ExperienceItem from "../ExperienceItem";
import styles from "./Experience.module.scss";
const Experience = () => {
  return (
    <div className={styles.container}>
      {experiences.map((item) => (
        <ExperienceItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Experience;
