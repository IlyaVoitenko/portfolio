import styles from "./SkillsList.module.scss";

interface SkillsListProps {
  skills: string[];
}
const SkillsList = ({ skills }: SkillsListProps) => {
  return (
    <div className={styles.skillsList}>
      {skills &&
        skills.map((skill, i) => (
          <span key={i} className={styles.skillItem}>
            {skill}
          </span>
        ))}
    </div>
  );
};

export default SkillsList;
