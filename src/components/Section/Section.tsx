import { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

const Section = ({ id, title, children }: Props) => {
  return (
    <section id={id} className="min-h-screen px-6 py-20">
      <h2 className="text-3xl font-bold mb-6 text-white">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
