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
    <section className="relative z-10 w-full bg-slate-200 dark:bg-slate-300 py-20 px-6 xl:px-10">
      <h1 className="text-center text-3xl md:text-3xl xl:text-5xl font-bold text-cyan-900">Explore Our Innovations Today</h1>
      <div className="mx-auto text-center text-sm md:text-lg">
        <p className="mt-4 w-full text-balance leading-5 md:leading-7 text-cyan-900/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque <br /> beatae magni cupiditate deserunt
          laborum dignissimos
        </p>

        <button className="mt-6 rounded-full relative bg-cyan-600 px-10 py-3 text-sm md:text-base lg:text-lg lg:px-12 lg:py-4 font-medium ring-4 ring-cyan-600/40 transition duration-300 hover:scale-105 hover:shadow-xl hover:ring-cyan-600/60 text-cyan-100">
          Join for free
        </button>

      </div>

      <div className="relative mx-auto mt-6 h-64 md:h-80 lg:h-[420px] w-full max-w-[860px] transition duration-300 overflow-hidden rounded-[48px] bg-gray-200 shadow-md hover:shadow-lg">
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
            className={`z-20 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-cyan-500 transition-all duration-500 text-white ${isPlaying && "invisible select-none opacity-0"}`}
          >
            {isPlaying ? (
              <svg
                viewBox="0 0 512 512"
                className="w-12 h-12 md:w-16 md:h-16"
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
                  className="w-12 h-12 md:w-16 md:h-16"
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
