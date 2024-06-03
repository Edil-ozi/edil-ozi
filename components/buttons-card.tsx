import { cn } from "@/lib/utils";
import { Check, CopyIcon } from "lucide-react";

const ButtonsCard = ({
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
        "h-40 md:h-50 xl:h-60 w-full bg-background rounded-xl border border-neutral-100 dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center",
        className
      )}
    >
      <button className="group" type="button" tabIndex={-1}>
        <CopyIcon className="absolute top-2 right-2 text-neutral-300 group-hover/btn:block hidden h-4 w-4 transition duration-200 group-focus:hidden" />
        <Check className="absolute stroke-green-500 top-2 right-2 text-neutral-300 group-hover/btn:hidden hidden h-4 w-4 transition duration-200 group-focus:block" />
      </button>
      <div className="relative z-40">{children}</div>
    </div>
  );
};

export default ButtonsCard