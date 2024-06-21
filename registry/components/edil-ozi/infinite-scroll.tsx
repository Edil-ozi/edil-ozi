"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import Lenis from "lenis";

const images = [
  "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=640",
  "https://images.unsplash.com/photo-1576831371356-d6e9411ae501?q=40&w=640",
  "https://images.unsplash.com/photo-1580686405845-6c8ab1cb8e30?q=40&w=640",
  "https://images.unsplash.com/photo-1572756317709-fe9c15ced298?q=80&w=640",
  "https://images.unsplash.com/photo-1580941918181-dcebebd814aa?q=40&w=640",
  "https://images.unsplash.com/photo-1454117096348-e4abbeba002c?q=80&w=640",
];

const InfiniteScroll = () => {
  const container = useRef<any>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      infinite: true,
      wrapper: container.current!,
      content: container.current!.querySelector(".scroll-content"),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <section ref={container} className="relative scroll-auto w-full z-10 p-8 h-[70vh] overflow-hidden">
      {/* adjust  gap using `vh` unit for your case */}
      <div className="scroll-content grid grid-cols-3 gap-[2vh]">
        {[...images, ...images,].map((src, index) => (
          // adjust  height using `vh` unit for your case
          <div key={index} className="w-full mx-auto h-[31vh] relative">
            <Image src={src} objectFit="cover" fill={true} alt={`img-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default InfiniteScroll;
