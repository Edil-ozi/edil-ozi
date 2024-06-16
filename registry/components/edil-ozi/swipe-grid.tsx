"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

//optional hook for smooth scrolling
import useLenis from "@/hooks/useLenis";

const images = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=40&w=640",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=40&w=640",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=40&w=640",
  "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=640",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=640",
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=640",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=640",
  "https://images.unsplash.com/photo-1489365091240-6a18fc761ec2?q=40&w=640",
];

const SwipeGrid = () => {
  const grid = useRef<any>(null);
  const gridWrap = useRef<any>(null);

  const hasRun = useRef(false);

  const applyAnimation = () => {
    // Register Scroll Triggren
    gsap.registerPlugin(ScrollTrigger);

    // Child elements of grid
    const gridItems = grid.current?.querySelectorAll(".grid__item");
    const gridItemsInner = [...gridItems].map((item) => item.querySelector(".grid__item-inner"));

    // Define GSAP timeline with ScrollTrigger
    const timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: gridWrap.current,
        start: "top bottom+=5%",
        end: "bottom top-=5%",
        scrub: true,
        // markers: true // Optional: for debugging
      },
    });

    grid.current.style.perspective = "1000px";
    grid.current.style.width = "calc(1 / 0.65 * 100%)";
    grid.current.style.height = "calc(1 / 0.5 * 100%)";

    timeline
      .set(gridWrap.current, {
        rotationY: 25,
      })
      .set(gridItems, {
        z: () => gsap.utils.random(-1600, 200),
      })
      .fromTo(
        gridItems,
        {
          xPercent: () => gsap.utils.random(-1000, -500),
        },
        {
          xPercent: () => gsap.utils.random(500, 1000),
        },
        0,
      )
      .fromTo(
        gridItemsInner,
        {
          scale: 2,
        },
        {
          scale: 0.5,
        },
        0,
      );
  };

  useLenis();

  useEffect(() => {
    //make sure we run this function only once
    if (!hasRun.current && grid.current) {
      applyAnimation();
      window.scrollTo({ top: 0 });
      hasRun.current = true;
    }
  }, [grid]);

  return (
    <div className="z-10 w-full overflow-hidden bg-stone-200 dark:bg-stone-900">
      <h1 className="h-[50%] py-20 text-center text-4xl">Scroll Down</h1>
      <section className="relative mb-[20vh]">
        <div
          ref={grid}
          className="grid h-[calc(1/1*100%)] w-[calc(1/1*100%)] place-items-center p-8"
          style={{ perspective: "1500px" }}
        >
          <div
            style={{ transformStyle: "preserve-3d" }}
            ref={gridWrap}
            className="grid h-auto w-full grid-cols-4 gap-[2vw]"
          >
            {Array(5)
              .fill(images)
              .flat()
              .map((src, index) => (
                <div
                  key={index}
                  className="grid__item relative grid aspect-[1.5] h-auto w-full place-items-center overflow-hidden rounded-md ring-1 ring-slate-600 ring-offset-2 ring-offset-slate-200 dark:ring-slate-400 dark:ring-offset-slate-900"
                >
                  <Image
                    objectFit="cover"
                    quality={40}
                    src={src}
                    fill={true}
                    className="grid__item-inner relative h-auto min-w-[300px]"
                    alt="image"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
      <h2 className="pb-20 text-center text-2xl text-gray-500 dark:text-gray-600">
        Refresh The Page For Different Image Positions
      </h2>
    </div>
  );
};

export default SwipeGrid;
