"use client"
import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface Props {
  words: string[];
  className?: string;
}
const RotateBetween: FC<Props> = ({ words, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={words[index]}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className={cn("font-display font-bold tracking-[-0.02em] drop-shadow-sm", className)}
      >
        {words[index]}
      </motion.p>
    </AnimatePresence>
  );
};

export default RotateBetween;
