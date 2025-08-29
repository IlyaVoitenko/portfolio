"use client";
import { useEffect, useState } from "react";

type Options = IntersectionObserverInit;
export const sideBarConfig = {
  root: null,
  rootMargin: "-10% 0px -70% 0px",
  threshold: [0, 0.25, 0.5],
};
export function useActiveSection(id: string[], options?: Options) {
  const [active, setActive] = useState(id[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScrollTop = () => {
      if (window.scrollY < 50) {
        setActive("about");
      }
    };
    window.addEventListener("scroll", handleScrollTop);

    const targets = id
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!targets.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        const top = visible.reduce((a, b) =>
          a.intersectionRatio >= b.intersectionRatio ? a : b
        );
        const id = (top.target as HTMLElement).id;
        if (id && id !== active) setActive(id);
      },
      { ...sideBarConfig, ...options }
    );

    targets.forEach((t) => obs.observe(t));

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
      obs.disconnect();
    };
  }, [id.join("|")]);

  return active;
}
