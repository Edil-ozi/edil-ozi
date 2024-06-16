"use client";
import { useEffect, useState, useRef, FC } from "react";
import Image from "next/image";

import { useScroll, useTransform, motion } from "framer-motion";

//optionally hook for smooth scrolling
import useLenis from "@/hooks/useLenis";

interface Props {
  images: string[];
}

const TwoWayParallax: FC<Props> = ({ images }) => {
  const gallery = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    //when to start and end the animation (related to target element)
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  // Optionally for smooth scrolling
  useLenis();

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    resize();
  }, []);

  return (
    <div
      ref={gallery}
      className="box-content flex h-[180vh] gap-4 overflow-hidden bg-slate-500 p-4 py-10"
    >
      <Column
        images={[images[0], images[2], images[4]]}
        y={y1}
        classes="top-[-45%]"
      />
      <Column
        images={[images[5], images[6], images[3]]}
        y={y2}
        classes="top-[-95%]"
      />
      <Column
        images={[images[5], images[3], images[2]]}
        y={y3}
        classes="top-[-65%] hidden lg:flex"
      />
      <Column
        images={[images[2], images[0], images[3]]}
        y={y4}
        classes="hidden xl:flex top-[-75%]"
      />
    </div>
  );
};
export default TwoWayParallax;

type Column = { images: string[]; y: any; classes: string };

const Column = ({ images, y = 0, classes }: Column) => {
  return (
    <motion.div
      style={{ y }}
      className={`relative flex h-full w-full min-w-[180px] flex-col gap-4 ${classes}`}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className="relative h-full w-full overflow-hidden rounded-md"
        >
          <Image
            src={src}
            objectFit="cover"
            fill
            alt="img"
          />
        </div>
      ))}
    </motion.div>
  );
};
