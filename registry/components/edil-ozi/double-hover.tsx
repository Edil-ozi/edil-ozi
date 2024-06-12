"use client";

import Image from "next/image";


const DoubleHover = () => {

  return (
    <div className="relative flex w-full h-[480px]">

      <div className="flex-1 grid items-center grid-cols-[auto_minmax(50%,600px)]">
        <h2 className="content__title">I</h2>
        <Image src="https://images.unsplash.com/photo-1718027765066-7d18bdd6113c?q=80&w=1170" fill={true} alt="hello world" />
      </div>
    </div>
  )
};

export default DoubleHover;
