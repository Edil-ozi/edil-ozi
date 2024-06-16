"use client";
import { useEffect } from "react";

import { renderCanvas } from "@/hooks/CanvasCursor";

const CanvasCursor = () => {
  useEffect(() => renderCanvas(), []);
  return (
    <div className="z-10 flex h-20 w-full items-center justify-center rounded-md bg-neutral-200 text-black">
      <h1>Try it on the whole page</h1>
      <canvas
        className="pointer-events-none fixed inset-0"
        id="canvas"
      ></canvas>
    </div>
  );
};
export default CanvasCursor;
