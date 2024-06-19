import RotateBetween from "../edil-ozi/rotate-between";

export default function RotateBetweenWords() {
  const words = ["CREATE", "ENJOY", "IMPRESS"];

  return (
    <div className="flex flex-col items-start space-y-8 py-6">
      <RotateBetween
        words={words}
        className="text-balance bg-gradient-to-tr from-black from-30% to-black/60 bg-clip-text px-1 py-4 font-bold leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40"
      />
      <p className="px-2 text-3xl text-neutral-800 dark:text-gray-300">
        Join us in <b>exploring</b> the world of web development, design, and much more!{" "}
      </p>
    </div>
  );
}
