import { FC } from "react";

import useCopyToClipboard from "@/hooks/useCopyToClipboard";

import ButtonsCard from "@/components/buttons-card";

interface Props {}

const Buttons: FC<Props> = () => {
  const { copy } = useCopyToClipboard();

  const buttons = [
    {
      name: "Submit",

      component: (
        <button
          type="button"
          className="mb-2 me-2 h-12 rounded-md border border-purple-700 px-6 text-center text-sm font-medium text-purple-700 hover:bg-purple-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-transparent dark:border-purple-500 dark:text-purple-500 dark:hover:bg-purple-600 dark:hover:text-white dark:focus:ring-purple-800"
        >
          Submit
        </button>
      ),
    },

    {
      name: "Shimmer",

      component: (
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-200 bg-[linear-gradient(110deg,#fff,45%,#f1f1f1,55%,#fff)] bg-[length:200%_100%] px-6 font-medium text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-400 dark:border-slate-800 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] dark:text-slate-400 dark:focus:ring-slate-300">
          Shimmer
        </button>
      ),
      code: `
        // Button code
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 bg-[linear-gradient(110deg,#fff,45%,#f1f1f1,55%,#fff)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-600 dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-400 dark:focus:ring-slate-300">
          Shimmer
        </button>
  
        // tailwind.config.js code
        {
          "animation": {
            shimmer: "shimmer 2s linear infinite"
          },
          "keyframes": {
            shimmer: {
              from: {
                "backgroundPosition": "0 0"
              },
              to: {
                "backgroundPosition": "-200% 0"
              }
            }
          }
        }
      `,
    },

    {
      name: "Shimmer-v2",

      component: (
        <button className="group/button relative h-12 inline-flex items-center justify-center overflow-hidden rounded-md font-medium bg-white dark:bg-[#000103] border text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 px-6 py-1.5 text-xs transition-colors duration-300 ease-in focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-400 hover:shadow-[#000103]/50">
          <span className="text-base">Shimmer-v2</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-10 bg-black/10 dark:bg-white/15" />
          </div>
        </button>
      ),
    },
    {
      name: "Gradient",

      component: (
        <button type="button" className="bg-slate-100 dark:bg-slate-800 no-underline group cursor-pointer relative rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(189,56,222,1)_0%,rgba(56,189,248,1)_75%)] dark:bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(189,56,222,0.6)_0%,rgba(56,189,248,0.1)_75%)] opacity-40 dark:opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-slate-100 text-black/80 dark:text-white/80 dark:bg-slate-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>
              Gradient Borders
            </span>
            {/*  */}
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      ),
    },
  ];

  return (
    <div className="w-full px-4 pb-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {buttons.map((btn) => (
          <ButtonsCard key={btn.name} onClick={() => copy(btn)}>
            {btn.component}
          </ButtonsCard>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
