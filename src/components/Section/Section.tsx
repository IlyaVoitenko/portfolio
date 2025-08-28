import styles from "./Section.module.scss";
import { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

const Section = ({ id, title, children }: Props) => {
  return (
    <section id={id} className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
