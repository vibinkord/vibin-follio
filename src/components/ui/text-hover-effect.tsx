"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface TextHoverEffectProps {
  text: string;
  perCharDelay?: number;
}

export const TextHoverEffect = ({
  text,
  perCharDelay = 0.02,
}: TextHoverEffectProps) => {
  const letters = text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: perCharDelay,
        delayChildren: custom * perCharDelay,
      },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.2,
      color: "#0ef",
      textShadow: "0 0 8px rgba(0, 239, 255, 0.6)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={child}
          whileHover="hover"
          style={{
            display: "inline-block",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
