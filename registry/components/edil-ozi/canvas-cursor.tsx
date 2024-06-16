'use client'
import { useEffect } from 'react';

import { renderCanvas } from '@/hooks/CanvasCursor'

const CanvasCursor = () => {

  useEffect(() => renderCanvas(), []);
  return (
    <div className=" w-full h-20 flex items-center justify-center text-black bg-neutral-200 z-10 rounded-md">
      <h1>Try it on the whole page</h1>
      <canvas className="pointer-events-none fixed inset-0" id="canvas"></canvas>
    </div>
  )
};
export default CanvasCursor