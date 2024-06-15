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
  const container = useRef<any>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      infinite: true,
      wrapper: container.current!,
      content: container.current!.querySelector('.scroll-content')
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (

    <section ref={container} className="scroll-area relative flex w-full flex-col z-10 gap-6 p-8 max-h-[700px] overflow-auto">
      <div className="scroll-content h-[1000px] overflow-y-scroll">
        {[...images, ...images].map(src => (
          React.cloneElement(
            <div key={Math.random()} className="w-full max-w-[800px] mx-auto h-[600px] relative">
              <Image src={src} objectFit="cover" fill={true} alt="img" />
            </div>
          )
        ))}
      </div>
    </section>
  )
};
export default InfiniteScroll