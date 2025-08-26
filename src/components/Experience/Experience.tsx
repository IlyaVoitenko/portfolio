import { experiences } from "../../data/experience";
import ExperienceItem from "../ExperienceItem";
const Experience = () => {
  const isActive = true;
  return (
    <div className="space-y-10">
      {experiences.map((item) => (
        <ExperienceItem key={item.id} item={item} isActive={isActive} />
      ))}
    </div>
  );
};

export default Experience;
