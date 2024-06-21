"use client";
import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

//optional hook for smooth scrolling
import useLenis from "@/hooks/useLenis";

const images = [
  "https://images.unsplash.com/photo-1576831371356-d6e9411ae501?q=40&w=640",
  "https://images.unsplash.com/photo-1454117096348-e4abbeba002c?q=80&w=640",
  "https://images.unsplash.com/photo-1572756317709-fe9c15ced298?q=80&w=640",
  "https://images.unsplash.com/photo-1595839072560-bac90c191b40?q=80&w=640",
  "https://images.unsplash.com/photo-1588594276800-2de0522b3b73?q=80&w=640",
  "https://images.unsplash.com/photo-1572756317709-fe9c15ced298?q=80&w=640",
  "https://images.unsplash.com/photo-1482053450283-3e0b78b09a70?q=80&w=640",
  "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=640",
];

const PerspectiveGrid = () => {
  const grid = useRef<HTMLDivElement | null>(null);
  const gridWrap = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP();

  const applyAnimation = contextSafe(() => {
    if (!grid.current || !gridWrap.current) return;

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: ".grid_wrap",
        start: "top bottom+=5%",
        end: "bottom top-=5%",
        scrub: true,
        // markers: true, // Optional: for debugging
      },
    });

    Object.assign(grid.current.style, {
      perspective: "1300px",
      height: "200%",
      width: "115%",
    });

    Object.assign(gridWrap.current.style, {
      width: "105%",
      gridTemplateColumns: "repeat(6, minmax(4, 1fr))",
    });

    timeline
      .set(".grid_item", {
        transformOrigin: "50% 0%",
        z: () => gsap.utils.random(-4000, -2000),
        rotationX: () => gsap.utils.random(-65, -25),
        filter: "brightness(0%)",
      })
      .to(
        ".grid_item",
        {
          xPercent: () => gsap.utils.random(-150, 150),
          yPercent: () => gsap.utils.random(-300, 300),
          rotationX: 0,
          filter: "brightness(200%)",
        },
        0,
      )
      .to(
        ".grid_wrap",
        {
          z: 6500,
        },
        0,
      )
      .fromTo(".grid_item-inner", { scale: 1.5 }, { scale: 0.5 }, 0);
  });

  useLenis();

  useGSAP(
    () => {
      // Register Scroll Triggren
      gsap.registerPlugin(ScrollTrigger);
      window.scrollTo({ top: 0 });
      applyAnimation();
    },
    { scope: grid.current!, dependencies: [] },
  );

  return (
    <div className="z-10 w-full overflow-hidden bg-stone-200 dark:bg-stone-900">
      <h1 className="h-[30%] pb-10 pt-20 text-center text-4xl">Scroll Down</h1>
      <div className="relative w-full py-[20vh]">
        <div
          ref={grid}
          className="grid w-full place-items-center"
          style={{ perspective: "1200px" }}
        >
          <div
            ref={gridWrap}
            style={{ transformStyle: "preserve-3d" }}
            className="grid_wrap grid h-auto w-full grid-cols-4 gap-[2vw]"
          >
            {Array(7)
              .fill(images)
              .flat()
              .map((src, index) => (
                <div
                  key={index}
                  className="grid_item relative grid aspect-[1.5] h-auto w-full place-items-center overflow-hidden rounded-md"
                >
                  <Image
                    objectFit="cover"
                    quality={60}
                    src={src}
                    fill={true}
                    className="grid_item-inner relative h-auto min-w-[300px]"
                    alt="image"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerspectiveGrid;
