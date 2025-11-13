import { nanoid } from "nanoid";
export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const experiences = [
  {
    id: nanoid(),
    role: "Frontend Developer",
    company: "Transactions Project | Freelance",
    period: {
      start: {
        year: 2021,
        month: 1,
      },
      end: {
        year: 2021,
        month: 2,
      },
    },
    description:
      "Developed a React-based project enabling secure transactions between the USA and Ukraine. Collaborated closely with Product Managers (PMs), backend developers, and designers to ensure seamless integration, efficient workflows, and an optimal user experience. ",
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "WordPress",
      "CSS",
      "HTML",
      "Git",
      "Figma",
      "Node.js",
    ],
  },
  {
    id: nanoid(),
    role: "Frontend Developer",
    company: "Language courses | Freelance",
    period: {
      start: {
        year: 2022,
        month: 6,
      },
      end: {
        year: 2022,
        month: 9,
      },
    },
    description:
      "Developed a responsive website for language courses using React, ensuring an engaging user experience across devices. Collaborated with designers to implement a clean, intuitive interface and integrated essential features such as course listings, enrollment forms, and contact options.",
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "WordPress",
      "CSS",
      "HTML",
      "Git",
      "Figma",
      "Node.js",
    ],
  },
  {
    id: nanoid(),
    role: "Frontend Developer",
    company: "Package Mechanics Company",
    period: {
      start: {
        year: 2020,
        month: 6,
      },
      end: {
        year: 2023,
        month: 1,
      },
    },
    description:
      " I have built responsive, user-friendly web interfaces, implemented web security best practices, created dynamic React components, and customized WordPress sites, ensuring clean, efficient code and a smooth user experience.",
    stack: ["Next.js", "SCSS", "Node.js", "TypeScript", "React", "AWS"],
  },
];
