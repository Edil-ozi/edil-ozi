"use client";
import Image from "next/image";
import { FC, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface Props {
  text: string;
  speed?: number;
}

const InfiniteText: FC<Props> = ({ text, speed = 0.1 }) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const animate2 = () => {
    if (xPercent < -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });
    requestAnimationFrame(() => animate2());
    xPercent += speed * direction;
  };

  useGSAP((context) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        // end: window.innerHeight,
        scrub: 0.35,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });

    context.add(() => requestAnimationFrame(animate2));
  });
  return (
    <div className="z-[10] h-[320px] w-full">
      <div className="relative flex h-full items-center overflow-hidden rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029"
          objectFit="cover"
          fill={true}
          alt="bg"
        />
        <div className="absolute">
          <div ref={slider}
            className="relative m-0 flex whitespace-nowrap">
            <p ref={firstText}
              className="m-0 mr-3 text-4xl font-medium text-white md:text-6xl lg:text-7xl">
              {text}
            </p>
            <p ref={secondText}
              className="m-0 text-4xl font-medium text-white md:text-6xl lg:text-7xl">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteText;
