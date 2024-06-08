import { FC } from "react";

import useCopyToClipboard from "@/hooks/useCopyToClipboard";

import CardWrapper from "@/components/card-wrapper";

interface Props { }

const ToggleInputs: FC<Props> = () => {
  const { copy } = useCopyToClipboard();

  const toggle_inputs = [
    {
      name: "Toggle-minimal",

      component: (
        <label className="text-[17px] relative inline-block w-[3.7em] h-[1.8em] ">
          <input tabIndex={-1} type="checkbox" className="hidden opacity-0 w-0 h-0 [&:checked+span:before]:bg-green-700/70 dark:[&:checked+span:before]:bg-green-500 [&:checked+span:before]:translate-x-[1.9em] [&:checked+span]:bg-green-400 dark:[&:checked+span]:bg-green-900" />
          <span tabIndex={0} className="absolute cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 bg-gray-300 dark:bg-gray-700 transition ease-in-out rounded-[30px] inset-0 before:absolute before:content-[''] before:h-[1.4em] before:w-[1.4em] before:bg-gray-400 dark:before:bg-gray-400 before:transition before:duration-300 before:rounded-[20px] before:left-[0.2em] before:bottom-[0.2em] "></span>
        </label>
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
