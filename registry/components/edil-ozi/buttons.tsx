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
          className="mb-2 me-2 h-12 rounded-md border border-purple-700 px-6 text-center text-sm font-medium text-purple-700 hover:bg-purple-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 dark:border-purple-500 dark:text-purple-500 dark:hover:bg-purple-600 dark:hover:text-white dark:focus:ring-purple-800"
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
