import { FC } from "react";

import useCopyToClipboard from "@/hooks/useCopyToClipboard";

import CardWrapper from "@/components/card-wrapper";

interface Props { }

const BaseInputs: FC<Props> = () => {
  const { copy } = useCopyToClipboard();

  const buttons = [
    {
      name: "Search...",

      component: (
        <input
          type="text"
          className="w-48 bg-slate-600 text-slate-700 px-2 py-1 h-10 focus:outline-none shadow-lg border-b border-transparent focus:border-green-500 hover:outline-gray-400 "
          placeholder="Search..."

        />
      ),
    },
  ];

  return (
    <div className="w-full px-4 pb-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {buttons.map((btn) => (
          <CardWrapper key={btn.name} onClick={() => copy(btn)}>
            {btn.component}
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

export default BaseInputs;
