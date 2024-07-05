import { ReactNode, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";

interface Props {
  children: ReactNode[] | string;
  velocity: number;
  movable?: boolean;
  clamp?: boolean;
}

export default function ScrollVelocity({ children, velocity = 5, movable = true, clamp = false }: Props) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 100,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 10000], [0, 5], {
    clamp,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

  const directionFactor = useRef<number>(1);
  const scrollThreshold = useRef<number>(5);

  useAnimationFrame((t, delta) => {
    if (movable) {
      move(delta);
    } else {
      if (Math.abs(scrollVelocity.get()) >= scrollThreshold.current) {
        move(delta);
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
    <div className="relative m-0 flex flex-nowrap overflow-hidden whitespace-nowrap leading-[0.8] tracking-[-2px]">
      <motion.div
        className="flex flex-row flex-nowrap whitespace-nowrap text-xl font-semibold uppercase *:mr-6 *:block md:text-2xl xl:text-4xl"
        style={{ x }}
      >
        {typeof children === "string" ? (
          <>
            {Array.from({ length: 5 }).map((_, idx) => (
              <span key={idx}>{children}</span>
            ))}
          </>
        ) : (
          children
        )}
      </motion.div>
    </div>
  );
}
