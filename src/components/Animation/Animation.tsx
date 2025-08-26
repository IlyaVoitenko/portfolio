"use client";
import { motion, useAnimation, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";

interface AnimationProps {
  children: React.ReactNode;
  variants?: object; // кастомные анимации
  duration?: number;
  delay?: number;
  once?: boolean; // проигрывать один раз или каждый раз
}

const defaultVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 }, // например, исчезание вверх
};

const Animation = ({
  children,
  variants = defaultVariants,
  duration = 0.5,
  delay = 0,
  once = false,
}: AnimationProps) => {
  const ref = useRef(null);
  const isView = useInView(ref, { once });
  const controls = useAnimation();

  useEffect(() => {
    if (isView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // если хочешь, чтобы исчезало при скролле
    }
  }, [isView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variants || defaultVariants}
      initial="hidden"
      animate={controls}
      exit="exit"
      transition={{ duration, delay }}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
