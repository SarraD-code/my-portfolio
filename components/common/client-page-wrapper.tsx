"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface ClientPageWrapperProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  },
};

export const ClientPageWrapper = ({ children }: ClientPageWrapperProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
