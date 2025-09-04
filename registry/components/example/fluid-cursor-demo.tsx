"use client";

import FluidCursor from "@/registry/components/edil-ozi/fluid-cursor";

const FluidCursorDemo = () => {
  return (
    <>
      <div className="z-10 flex h-[350px] w-full items-center justify-center bg-zinc-100 text-center dark:bg-zinc-900">
        Try it on the whole page
      </div>
      <FluidCursor />
    </>
  );
};
export default FluidCursorDemo;
