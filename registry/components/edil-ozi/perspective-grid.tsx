"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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

const PerspectiveGrid = () => {
  const grid = useRef<any>(null);
  const gridWrap = useRef<any>(null);
  const hasRun = useRef(false);

  const applyAnimation = () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Child elements of grid
    const gridItems = grid.current?.querySelectorAll('.grid__item');
    const gridItemsInner = Array.from(gridItems).map((item: any) => item.querySelector('.grid__item-inner'));

    // Define GSAP timeline with ScrollTrigger
    const timeline = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: gridWrap.current,
        start: 'top bottom+=5%',
        end: 'bottom top-=5%',
        scrub: true,
        // markers: true, // Optional: for debugging
      }
    });

    grid.current.style.perspective = '1500px';
    gridWrap.current.style.width = "110%"
    grid.current.style.height = 'calc(1 / 0.5 * 100%)'
    grid.current.style.width = 'calc(1 / 0.5 * 100%)'
    gridWrap.current.style.gridTemplateColumns = "repeat(8, minmax(6, 1fr)";

    timeline
      .set(gridItems, {
        transformOrigin: '50% 0%',
        z: () => gsap.utils.random(-5000, -2000),
        rotationX: () => gsap.utils.random(-65, -25),
        filter: 'brightness(0%)',
      })
      .to(gridItems, {
        xPercent: () => gsap.utils.random(-150, 150),
        yPercent: () => gsap.utils.random(-300, 300),
        rotationX: 0,
        filter: 'brightness(200%)',
      }, 0)
      .to(gridWrap.current, {
        z: 6500,
      }, 0)
      .fromTo(gridItemsInner, {
        scale: 2,
      }, {
        scale: 0.5,
      }, 0);
  };

  useEffect(() => {
    // Make sure we run this function only once
    if (!hasRun.current && grid.current) {
      applyAnimation();
      hasRun.current = true;
    }
  }, [grid]);

  return (
    <div className="w-full overflow-hidden z-10 bg-stone-200 dark:bg-stone-900">
      <h1 className="text-center h-[50%] py-20 text-4xl">Scroll Down</h1>
      <div className="relative py-[30vh] w-full">
        <div ref={grid} className="grid place-items-center w-full" style={{ perspective: "1200px" }}>
          <div style={{ transformStyle: 'preserve-3d' }} ref={gridWrap} className="h-auto w-full grid grid-cols-4 gap-[2vw]">
            {Array(6).fill(images).flat().map((src, index) => (
              <div key={index} className="grid__item aspect-[1.5] w-full h-auto overflow-hidden relative rounded-md grid place-items-center">
                <Image objectFit="cover" quality={80} src={src} fill={true} className="grid__item-inner relative min-w-[300px] h-auto" alt="image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerspectiveGrid;
