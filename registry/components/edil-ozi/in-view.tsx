"use client";
import { type ReactNode, useRef, FC } from "react";
import { motion, useInView, Variant, Transition, UseInViewOptions } from "framer-motion";

interface Props {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
}

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const InView: FC<Props> = ({ children, variants = defaultVariants, transition, viewOptions }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default InView;
