"use client";
import React from "react";
import ScrollVelocityParallax from "../edil-ozi/scroll-velocity-parallax";
import Image from "next/image";

const images = [
  {
    title: "Moonbeam",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=40&w=640",
  },
  {
    title: "Cursor",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=40&w=640",
  },
  {
    title: "Rogue",
    thumbnail: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=40&w=640",
  },
  {
    title: "Editorially",
    thumbnail: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=640",
  },
  {
    title: "Editrix AI",
    thumbnail: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=640",
  },
  {
    title: "Moonbeam 2",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=40&w=640",
  },
  {
    title: "Cursor 2",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=40&w=640",
  },
  {
    title: "Rogue 2",
    thumbnail: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=40&w=640",
  },
  {
    title: "Editorially 2",
    thumbnail: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=640",
  },
  {
    title: "Editrix AI 2",
    thumbnail: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=640",
  },
];
const movable =[
  {velocity: 3},
  {velocity: -3},
]

export default function ScrollVelocityParallaxDemo() {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl md:text-3xl">Scroll To See Effect</h2>
      <div className="flex flex-col space-y-5 py-10">
        {movable.map(({velocity}, index) =>
          <ScrollVelocityParallax key={index} velocity={velocity}>
            {images.map(({title, thumbnail}) =>
              <div key={title} className="relative h-[7rem] w-[10rem] md:h-[12rem] md:w-[15rem] xl:h-[22rem] xl:w-[25rem]">
                <Image
                  src={thumbnail} alt={title} 
                  height={360}
                  width={360}
                  className="object-cover object-center h-full w-full"/>
              </div>
            )}
          </ScrollVelocityParallax>
        )}
        <ScrollVelocityParallax velocity={5}>
          You can also use a text!
        </ScrollVelocityParallax>
      </div>
    </div>
  )
}
