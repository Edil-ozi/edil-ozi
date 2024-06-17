'use client'
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import Lenis from "lenis";

const images = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=40&w=640",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=40&w=640",
  "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=640",
];

const InfiniteScroll = () => {
  const container = useRef<any>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      infinite: true,
      wrapper: container.current!,
      content: container.current!.querySelector('.scroll-content'),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <section ref={container} className="relative scroll-auto w-full z-10 p-8 h-screen overflow-hidden">
      {/* adjust  gap using `vh` unit for your case */}
      <div data-scroll className="scroll-content grid grid-cols-3 gap-[5vh]">
        {[...images, ...images, ...images, ...images].map((src, index) => (
          // adjust  height using `vh` unit for your case
          <div key={index} className="w-full mx-auto h-[43vh] relative">
            <Image src={src} objectFit="cover" fill={true} alt={`img-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default InfiniteScroll