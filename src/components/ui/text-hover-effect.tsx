"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextHoverEffectProps {
  text: string;
  duration?: number;
  perCharDelay?: number;
}

export const TextHoverEffect = ({
  text,
  duration = 0.5,
  perCharDelay = 0.02,
}: TextHoverEffectProps) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: perCharDelay,
        delayChildren: custom * perCharDelay,
      },
    }),
  };

  const child = {
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
