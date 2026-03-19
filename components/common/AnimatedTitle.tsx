"use client";

import { motion, Variants } from "framer-motion";

type AnimatedTitleProps = {
  text: string;
};

export default function AnimatedTitle({ text }: AnimatedTitleProps) {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h3
      variants={container}
      initial="hidden"
      animate="visible"
      className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h3>
  );
}