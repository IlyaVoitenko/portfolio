import React from "react";
import styles from "./ExperienceItem.module.scss";
import { months } from "../../data/experience.data";
import SkillsList from "../SkillsList";
interface ExperienceItemProps {
  item: {
    id: number | string;
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
        {months[item.period.start.month]} {item.period.start.year} - <br />
        {months[item.period.end.month]} {item.period.end.year}
      </span>
      <div key={item.id} className={styles.containerContent}>
        <h3 className={styles.role}>
          {item.role} | {item.company}
        </h3>

        <p className={`${styles.description}`}>{item.description}</p>
        <SkillsList skills={item.stack} />
      </div>
    </section>
  );
};

export default ExperienceItem;
