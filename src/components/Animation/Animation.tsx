"use client";
import { motion, useAnimation, useInView, Variants } from "motion/react";
import React, { useEffect, useRef } from "react";

interface AnimationProps {
  children: React.ReactNode;
  variants?: Variants;
  duration?: number;
  delay?: number;
  once?: boolean;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
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
      controls.start("hidden");
    }
  }, [isView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
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
