import RotateBetween from "../edil-ozi/rotate-between";

const RotateBetweenWords = () => {
  const words = ["CREATE", "LEARN", "ENJOY", "IMPRESS"];

  return (
    <div className="w-full bg-slate-200 dark:bg-slate-800 px-4 my-4 rounded-lg ">
      <div className="px-2 flex text-4xl h-20 items-center justify-start font-normal text-neutral-800 dark:text-gray-300 space-x-1">
        <p>Contribute us to</p>
        <RotateBetween
        words={words}
          className="text-balance bg-gradient-to-tr from-black from-30% to-black/60 bg-clip-text px-1 font-bold leading-none py-2 tracking-tighter text-transparent dark:from-white dark:to-white/40"
        />
      </div>
    </div>
  );
}

export default RotateBetweenWords