'use client'
import { FC, useEffect, } from 'react';


import { renderCanvas } from './CanvasCursor.js'


interface Props { };

const CanvasCursor: FC<Props> = () => {

  useEffect(() => renderCanvas(), []);
  return (
    <div className=" w-full h-[800px] bg-slate-700 z-10">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ab facere sapiente totam quia voluptatum atque reiciendis, unde incidunt excepturi vitae perspiciatis quasi maxime nam veritatis, similique ducimus vel! Repudiandae, doloremque voluptatem laborum praesentium, eos deleniti id veniam, repellendus officia doloribus aperiam atque. Aperiam voluptas natus repellendus laboriosam, hic quisquam.
      <canvas className="bg-skin-base pointer-events-none fixed inset-0" id="canvas"></canvas>
    </div>
  )
};
export default CanvasCursor