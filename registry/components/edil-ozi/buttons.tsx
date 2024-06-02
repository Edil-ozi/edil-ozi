import { cn } from "@/lib/utils";
import { CopyIcon } from "lucide-react";
import { FC } from "react";

interface Props {
}

const Buttons: FC<Props> = () => {

  const buttons = [
    {
      name: "Sketch",
      description: "Sketch button for your website",

      component: (
        <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
          Sketch
        </button>
      ),
    },

    {
      name: "Sketch",
      description: "Sketch button for your website",

      component: (
        <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
          Sketch
        </button>
      ),
    },
  ]

  return (
    <div className="pb-40 px-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto gap-10">
        {buttons.map((btn) => (
          <ButtonsCard key={btn.name}>
            {btn.component}
          </ButtonsCard>
        ))}
      </div>
    </div>
  );
};

export default Buttons;


export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "h-60 w-full bg-background rounded-xl border border-neutral-100 dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center",
        className
      )}
    >
      <CopyIcon className="absolute top-2 right-2 text-neutral-300 group-hover/btn:block hidden h-4 w-4 transition duration-200" />
      <div className="relative z-40">{children}</div>
    </div>
  );
};
