"use client";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  text: string;
  speed?: number;
}

const InfiniteText: FC<Props> = ({ text, speed = 0.1 }) => {
  //make sure your font-size and text length fits screen width to work as expected

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const animation = () => {
    if (xPercent < -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });
    requestAnimationFrame(animation);
    xPercent += speed * direction;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
    requestAnimationFrame(animation);
  }, []);
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
          <div ref={slider} className="relative m-0 flex whitespace-nowrap">
            <p
              ref={firstText}
              className="m-0 mr-3 text-4xl font-medium text-white md:text-5xl lg:text-6xl"
            >
              {text}
            </p>
            <p
              ref={secondText}
              className="m-0 text-4xl font-medium text-white md:text-5xl lg:text-6xl"
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteText;
