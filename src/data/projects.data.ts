import diveSea from "../assets/diveSea.png";
import mobileStore from "../assets/mobileStore.png";
import { nanoid } from "nanoid";

export const projects = [
  {
    id: nanoid(),
    title: "DiveSea",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    link: "https://dive-sea-amber.vercel.app/",
    image: diveSea,
    stack: ["React", "TypeScript", "SCSS"],
  },
  {
    id: nanoid(),
    title: "Mobile Store",
    description:
      "An e-commerce mobile application for buying and selling products.",
    link: "https://mobile-store-gold.vercel.app/",
    image: mobileStore,
    stack: ["React ", "TypeScript", "Firebase", "SCSS"],
  },
];
