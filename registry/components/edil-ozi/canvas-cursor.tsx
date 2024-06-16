"use client";
import { useEffect } from "react";

import { renderCanvas } from "@/hooks/CanvasCursor";

const CanvasCursor = () => {
  useEffect(() => renderCanvas(), []);
  return (
    <canvas
      className="pointer-events-none fixed inset-0"
      id="canvas"
    />
  );
};
export default CanvasCursor;
