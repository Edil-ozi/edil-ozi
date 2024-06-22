"use client";

import useCanvasCursor from "@/hooks/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();

  return (
    <canvas
      className="pointer-events-none fixed inset-0"
      id="canvas"
    />
  );
};
export default CanvasCursor;
