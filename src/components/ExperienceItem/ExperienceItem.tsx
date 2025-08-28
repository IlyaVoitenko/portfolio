import React from "react";
import styles from "./ExperienceItem.module.scss";
import { months } from "../../data/experience";
interface ExperienceItemProps {
  item: {
    id: number;
    role: string;
    company: string;
    period: {
      start: { year: number; month: number };
      end: { year: number; month: number };
    };
    description: string;
    stack: string[];
  };
}
const ExperienceItem = ({ item }: ExperienceItemProps) => {
  return (
    <section className={styles.container}>
      <span className={styles.companyPeriod}>
        {months[item.period.start.month]} - {months[item.period.end.month]}{" "}
        {item.company} ·
      </span>
      <div key={item.id} className={styles.containerContent}>
        <h3 className={styles.role}>{item.role}</h3>

        <p className={`${styles.description}`}>{item.description}</p>
        <div className={styles.skillsList}>
          {item.stack.map((skill, i) => (
            <span key={i} className={styles.skillItem}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceItem;
