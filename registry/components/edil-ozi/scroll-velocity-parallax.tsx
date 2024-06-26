import { ReactNode, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap
} from "framer-motion";

interface ParallaxProps {
  children: ReactNode[] | string;
  velocity: number;
  movable?: boolean;
  clamp?: boolean;
}

export default function ScrollVelocityParallax({ children, velocity = 5, movable = true, clamp = false }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 100
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 10000], [0, 5], {
    clamp
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

  const directionFactor = useRef<number>(1);
  const scrollThreshold = useRef<number>(5); 

  useAnimationFrame((t, delta) => {
    if (movable) {
      move(delta)
    } else {
      if (Math.abs(scrollVelocity.get()) >= scrollThreshold.current) {
        move(delta)
      }
    }
  });

  function move(delta: number) {
    let moveBy = directionFactor.current * velocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  }

  return (
    <div className="overflow-hidden tracking-[-2px] leading-[0.8] whitespace-nowrap flex flex-nowrap m-0 relative">
      <motion.div className="font-semibold uppercase text-xl md:text-2xl xl:text-4xl whitespace-nowrap flex flex-row flex-nowrap *:mr-6 *:block" style={{ x }}>
        {typeof(children) === "string" ?
          <>
            {Array.from({ length: 5 }).map((_, idx) => (
              <span key={idx}>{children}</span>
            ))}
          </>
          :
          children
      }
      </motion.div>
    </div>
  );
}