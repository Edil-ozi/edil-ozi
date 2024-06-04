import { FC, useRef } from "react";
import Image from "next/image";

import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  classes?: string;
}

const ZoomParallax: FC<Props> = ({ classes }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528",
      scale: scale1,
      classes: "relative w-[25%] h-[25%]",
    },
    {
      src: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1887",
      scale: scale2,
      classes: "relative top-[-30%] left-[5%] w-[35%] h-[30%]",
    },
    {
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887",
      scale: scale3,
      classes: "relative top-[-29%] left-[-25%] w-[20%] h-[28%]",
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974",
      scale: scale2,
      classes: "relative left-[27.5%] w-[25%] h-[25%]",
    },
    {
      src: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1974",
      scale: scale3,
      classes: "relative left-[-27.5%] w-[25%] h-[25%]",
    },
    {
      src: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071",
      scale: scale4,
      classes: "relative top-[27.5%] left-[5%] w-[20%] h-[25%]",
    },
    {
      src: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070",
      scale: scale5,
      classes: "relative top-[22.5%] left-[25%] w-[15%] h-[15%]",
    },
  ];

  return (
    <section
      ref={container}
      className={cn("relative z-20 h-[200vh] w-full", classes)}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale, classes }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div className={classes}>
                <Image src={src} fill objectFit="cover" alt="image" />
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="h-[100vh] leading-[0]"></div>
      <p>Continue your content here...</p>
    </section>
  );
};

export default ZoomParallax;
