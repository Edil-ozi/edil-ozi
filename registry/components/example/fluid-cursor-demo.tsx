"use client";

import FluidCursor from "@/registry/components/edil-ozi/fluid-cursor";

const FluidCursorDemo = () => {

  return (
    <>
      <div className='bg-zinc-100 dark:bg-zinc-900 w-full flex items-center justify-center text-center h-[350px] z-[-2]'>
        Try it on the whole page
      </div>
      <FluidCursor />
    </>
  );
};
export default FluidCursorDemo;
