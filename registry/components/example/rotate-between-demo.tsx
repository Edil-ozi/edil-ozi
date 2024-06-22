import RotateBetween from "../edil-ozi/rotate-between";

const RotateBetweenWords = () => {
  const words = ["CREATE", "LEARN", "ENJOY", "IMPRESS"];

  return (
    <div className="z-10 my-4 w-full rounded-lg bg-zinc-200 px-4 dark:bg-zinc-900">
      <div className="flex h-20 items-center justify-start space-x-1 px-2 text-4xl font-normal text-neutral-800 dark:text-gray-300">
        <p>Contribute us to</p>
        <RotateBetween
          words={words}
          className="text-balance bg-gradient-to-tr from-black from-30% to-black/60 bg-clip-text px-1 py-2 font-bold leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40"
        />
      </div>
    </div>
  );
};

export default RotateBetweenWords;
