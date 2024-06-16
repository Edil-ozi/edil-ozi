import { FC } from "react";

import useCopyToClipboard from "@/hooks/useCopyToClipboard";

import CardWrapper from "@/components/card-wrapper";

interface Props {}

const ToggleInputs: FC<Props> = () => {
  const { copy } = useCopyToClipboard();

  const toggle_inputs = [
    {
      name: "Toggle-minimal",

      component: (
        <label className="relative inline-block h-[1.8em] w-[3.7em] text-[17px]">
          <input
            tabIndex={-1}
            type="checkbox"
            className="hidden h-0 w-0 opacity-0 [&:checked+span:before]:translate-x-[1.9em] [&:checked+span:before]:bg-green-500/70 dark:[&:checked+span:before]:bg-green-500 [&:checked+span]:bg-green-300 dark:[&:checked+span]:bg-green-900"
          />
          <span className="absolute inset-0 cursor-pointer rounded-[30px] bg-gray-300 transition ease-in-out before:absolute before:bottom-[0.2em] before:left-[0.2em] before:h-[1.4em] before:w-[1.4em] before:rounded-[20px] before:bg-gray-400 before:transition before:duration-300 before:content-[''] dark:bg-gray-700 dark:before:bg-gray-400"></span>
        </label>
      ),
    },

    {
      name: "Toggle-orange",

      component: (
        <input
          type="checkbox"
          className="ease before:ease relative h-6 w-12 appearance-none rounded-full bg-stone-300 transition duration-300 before:absolute before:left-[calc(1.5em_-_1.6em)] before:top-[calc(1.5em_-_1.6em)] before:block before:h-[1.6em] before:w-[1.6em] before:cursor-pointer before:rounded-full before:border before:border-solid before:border-stone-400 before:bg-white before:transition-all before:duration-300 before:content-[''] checked:bg-orange-600 checked:before:translate-x-full checked:before:border-orange-600 hover:before:shadow-[0_0_0px_8px_rgba(0,0,0,0.15)] checked:hover:before:shadow-[0_0_0px_8px_rgba(236,72,72,0.15)]"
        />
      ),
    },
  ];

  return (
    <div className="w-full px-4 pb-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {toggle_inputs.map((btn) => (
          <CardWrapper
            key={btn.name}
            onClick={() => copy(btn)}
          >
            {btn.component}
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

export default ToggleInputs;
