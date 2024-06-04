import { cn } from "@/lib/utils";
import { Check, CopyIcon } from "lucide-react";

const CardWrapper = ({
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
        "md:h-50 group/btn relative flex h-40 w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-background hover:border-neutral-300 dark:border-white/[0.2] dark:hover:border-white/[0.25] xl:h-60",
        className,
      )}
    >
      <button className="group" type="button" tabIndex={-1}>
        <CopyIcon className="absolute right-2 top-2 hidden h-4 w-4 text-neutral-300 transition duration-200 group-hover/btn:block group-focus:hidden" />
        <Check className="absolute right-2 top-2 hidden h-4 w-4 stroke-green-500 text-neutral-300 transition duration-200 group-hover/btn:hidden group-focus:block" />
      </button>
      <div className="relative z-40">{children}</div>
    </div>
  );
};

export default CardWrapper;
