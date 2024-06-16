"use client";
import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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

const PerspectiveGrid = () => {
  const grid = useRef<HTMLDivElement | null>(null);
  const gridWrap = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP()

  const applyAnimation = contextSafe(() => {
    if (!grid.current || !gridWrap.current) return;

    const timeline = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: '.grid_wrap',
        start: 'top bottom+=5%',
        end: 'bottom top-=5%',
        scrub: true,
        // markers: true, // Optional: for debugging
      }
    });

    Object.assign(grid.current.style, {
      perspective: '1300px',
      height: '200%',
      width: '115%'
    });

    Object.assign(gridWrap.current.style, {
      width: '105%',
      gridTemplateColumns: 'repeat(6, minmax(4, 1fr))'
    });

    timeline
      .set(".grid_item", {
        transformOrigin: '50% 0%',
        z: () => gsap.utils.random(-4000, -2000),
        rotationX: () => gsap.utils.random(-65, -25),
        filter: 'brightness(0%)',
      })
      .to(".grid_item", {
        xPercent: () => gsap.utils.random(-150, 150),
        yPercent: () => gsap.utils.random(-300, 300),
        rotationX: 0,
        filter: 'brightness(200%)',
      }, 0)
      .to('.grid_wrap', {
        z: 6500,
      }, 0)
      .fromTo(".grid_item-inner", { scale: 1.5, }, { scale: 0.5, }, 0);
  });

  useLenis()

  console.log('rerender')
  useGSAP(() => {
    // Register Scroll Triggren
    gsap.registerPlugin(ScrollTrigger);
    window.scrollTo({ top: 0 });
    applyAnimation()

  }, { scope: grid.current!, dependencies: [] })



  return (
    <div className="w-full overflow-hidden z-10 bg-stone-200 dark:bg-stone-900">
      <h1 className="text-center h-[50%] pt-20 pb-10 text-4xl">Scroll Down</h1>
      <div className="relative py-[20vh] w-full">
        <div ref={grid} className="grid place-items-center w-full" style={{ perspective: "1200px" }}>
          <div ref={gridWrap} style={{ transformStyle: 'preserve-3d' }} className="grid_wrap h-auto w-full grid grid-cols-4 gap-[2vw]">
            {Array(7).fill(images).flat().map((src, index) => (
              <div key={index} className="grid_item aspect-[1.5] w-full h-auto overflow-hidden relative rounded-md grid place-items-center">
                <Image objectFit="cover" quality={40} src={src} fill={true} className="grid_item-inner relative min-w-[300px] h-auto" alt="image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerspectiveGrid;
