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
        <label className="text-[17px] relative inline-block w-[3.7em] h-[1.8em] ">
          <input tabIndex={0} type="checkbox" className="group w-0 h-0 [&:checked+span:before]:bg-green-500/70 dark:[&:checked+span:before]:bg-green-500 [&:checked+span:before]:translate-x-[1.9em] [&:checked+span]:bg-green-300 dark:[&:checked+span]:bg-green-900" />
          <span className="absolute cursor-pointer  bg-gray-300 dark:bg-gray-700 transition ease-in-out rounded-[30px] inset-0 before:absolute before:content-[''] before:h-[1.4em] before:w-[1.4em] before:bg-gray-400 dark:before:bg-gray-400 before:transition before:duration-300 before:rounded-[20px] before:left-[0.2em] before:bottom-[0.2em]"></span>
        </label>
      ),
    },

    {
      name: "Toggle-orange",

      component: (
        <input type="checkbox" className="relative h-6 w-12 appearance-none bg-stone-300 transition duration-300 ease rounded-full checked:bg-orange-600 before:absolute before:content-[''] before:left-[calc(1.5em_-_1.6em)] before:top-[calc(1.5em_-_1.6em)] before:block before:h-[1.7em] before:w-[1.6em] before:cursor-pointer before:border before:bg-white before:transition-all before:duration-300 before:ease before:rounded-full before:border-solid before:border-stone-400 hover:before:shadow-[0_0_0px_8px_rgba(0,0,0,0.15)] checked:hover:before:shadow-[0_0_0px_8px_rgba(236,72,72,0.15)] checked:before:translate-x-full checked:before:border-orange-500" />
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
