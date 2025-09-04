"use client";

import useInkCursor from "@/hooks/inkCursor";

const InkCursor = () => {
  const inkCursorComponent = useInkCursor();

  return (
    <>
      <div className="z-[10] flex h-[350px] w-full items-center justify-center bg-zinc-100 text-center dark:bg-zinc-900">
        Try it on the whole page
      </div>
      <div className="fixed left-0 top-0 z-[9]">{inkCursorComponent}</div>
    </>
  );
};
export default InkCursor;
