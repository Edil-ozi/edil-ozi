import CanvasCursor from "@/registry/components/edil-ozi/canvas-cursor";

const CanvasCursorDemo = () => {
  return (
    <div className="z-10 flex h-20 w-full items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-800 text-gray-800 dark:text-neutral-200">
      <h1>Try it on the whole page</h1>
      <CanvasCursor />
    </div>
  );
};
export default CanvasCursorDemo;
