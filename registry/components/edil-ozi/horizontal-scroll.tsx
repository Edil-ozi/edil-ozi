import { FC, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

interface Props {
  images: string[];
}

const HorizontalScrollCarousel: FC<Props> = ({ images }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] w-full"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4"
        >
          {images.map((src) => (
            <Card
              src={src}
              key={src}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card: FC<{ src: string }> = ({ src }) => {
  return (
    <div
      key={src}
      className="group relative h-[450px] w-[450px] overflow-hidden rounded-lg border border-gray-400"
    >
      <Image
        src={src}
        fill
        objectFit="cover"
        alt={src}
      />
    </div>
  );
};

export default HorizontalScrollCarousel;
