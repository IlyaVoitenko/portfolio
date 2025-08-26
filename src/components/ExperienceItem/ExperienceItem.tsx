import React from "react";

interface ExperienceItemProps {
  item: {
    id: number;
    role: string;
    company: string;
    period: { start: { year: number }; end: { year: number } };
    description: string;
    stack: string[];
  };
  isActive?: boolean;
}
const ExperienceItem = ({ item, isActive }: ExperienceItemProps) => {
  return (
    <div key={item.id} className="border-l border-slate-700 pl-6 relative">
      <span className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-sky-400"></span>
      <h3
        className={`text-xl font-semibold  ${
          isActive ? "text-[#93d3e9]" : "text-[#8d97ac]"
        }`}
      >
        {item.role}
      </h3>
      <p className="text-slate-400">
        {item.company} · {item.period.start.year}
      </p>
      <p className={`mt-2 ${isActive ? "text-[#8d97ac]" : "text-[#485370]"}`}>
        {item.description}
      </p>
      <div className="mt-2 flex gap-2 flex-wrap">
        {item.stack.map((skill, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-slate-800 rounded text-sm text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
