import { FC, useRef, useState } from "react";

interface Props {}

const Index: FC<Props> = () => {
  const [isPlaying, setPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  const handlePause = () => {
    videoRef.current?.pause();
    setPlaying(false);
  };

  const handleToggle = () => {
    isPlaying ? handlePause() : handlePlay();
  };

  return (
    <section className="relative z-10 w-full bg-gradient-to-b from-cyan-600/35 to-cyan-900/70 px-6 py-20 dark:bg-slate-300 xl:px-10">
      <h1 className="text-center text-3xl font-bold text-cyan-900 md:text-3xl xl:text-5xl">
        Explore Our Innovations Today
      </h1>
      <div className="mx-auto text-center text-sm md:text-lg">
        <p className="mt-4 w-full text-balance leading-5 text-cyan-900/70 md:leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque <br /> beatae magni cupiditate deserunt
          laborum dignissimos
        </p>

        <button className="relative mt-6 rounded-full bg-cyan-600 px-10 py-3 text-sm font-medium text-cyan-100 ring-4 ring-cyan-600/40 transition duration-300 hover:scale-105 hover:shadow-xl hover:ring-cyan-600/60 md:text-base lg:px-12 lg:py-4 lg:text-lg">
          Join for free
        </button>
      </div>

      <div className="relative mx-auto mt-6 h-64 w-full max-w-[860px] overflow-hidden rounded-[48px] bg-gray-200 shadow-md transition duration-300 hover:shadow-lg md:h-80 lg:h-[420px]">
        <video
          className="h-full w-full object-cover"
          ref={videoRef}
          src="https://cdn.pixabay.com/video/2024/05/31/214592_large.mp4"
        />

        <div
          role="button"
          onClick={handleToggle}
          className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
        >
          <div
            className={`z-20 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-white transition-all duration-500 md:h-20 md:w-20 ${isPlaying && "invisible select-none opacity-0"}`}
          >
            {isPlaying ? (
              <svg
                viewBox="0 0 512 512"
                className="h-12 w-12 md:h-16 md:w-16"
              >
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M208 192v128M304 192v128"
                />
              </svg>
            ) : (
              <svg
                className="h-12 w-12 md:h-16 md:w-16"
                stroke="currentColor"
                viewBox="0 0 512 512"
              >
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                />
                <path
                  d="M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z"
                  fill="currentColor"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Index;
