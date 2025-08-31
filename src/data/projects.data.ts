import diveSea from "../assets/diveSea.png";
import transaction from "../assets/transactions.png";
import mobileStore from "../assets/mobileStore.png";

export const projects = [
  {
    id: 1,
    title: "DiveSea",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    link: "https://dive-sea-amber.vercel.app/",
    image: diveSea,
    stack: ["React", "TypeScript", "SCSS"],
  },
  {
    id: 2,
    title: "Mobile Store",
    description:
      "An e-commerce mobile application for buying and selling products.",
    link: "https://mobile-store-gold.vercel.app/",
    image: mobileStore,
    stack: ["React Native", "TypeScript", "Firebase"],
  },
  {
    id: 3,
    title: "Transactions App",
    description:
      "A web application for managing and tracking financial transactions.",
    link: "https://list-transaction-frontend.vercel.app/",
    image: transaction,
    stack: ["React", "TypeScript", "Node.js"],
  },
];
