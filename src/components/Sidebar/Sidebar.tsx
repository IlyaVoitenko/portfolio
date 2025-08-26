"use client";
import Link from "next/link";
import gitIcon from "../../assets/icons8-github.svg";
import instagramIcon from "../../assets/icons8-instagram.svg";
import linkedin from "../../assets/icons8-linkedin.svg";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-slate-900 p-6 text-white flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold">Your Name</h1>
        <p className="mt-2 text-slate-400">Front End Engineer</p>
        <nav className="mt-8 space-y-4">
          <a href="#about" className="block hover:text-sky-400 transition">
            About
          </a>
          <a href="#experience" className="block hover:text-sky-400 transition">
            Experience
          </a>
          <a href="#projects" className="block hover:text-sky-400 transition">
            Projects
          </a>
        </nav>
      </div>
      <div className="flex gap-4">
        <Link href="https://github.com" target="_blank">
          <Image src={gitIcon} alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="https://linkedin.com" target="_blank">
          <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <Image src={instagramIcon} alt="Instagram" width={24} height={24} />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
