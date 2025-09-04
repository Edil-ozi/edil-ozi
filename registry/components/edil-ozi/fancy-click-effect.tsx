import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, useState } from "react";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const FancyClickEffect: FC<Props> = ({ children, ...rest }) => {
  const [isHolding, setIsHolding] = useState<boolean | undefined>(undefined);

  const handleMouseDown = () => {
    setIsHolding(true);
  };

  const handleMouseUpOrLeave = () => {
    if (isHolding) {
      setIsHolding(false);
    }
  };

  // prevent applying styles on first rendering with checking for "undefined" value
  const classToApply = isHolding === undefined ? "" : isHolding ? "bg-black/10 dark:bg-white/10" : "animate-fade-out";
  return (
    <div
      className="relative z-10 max-w-max bg-black/10 dark:bg-white/10"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      {...rest}
    >
      {children}

      <div
        className={`pointer-events-none absolute inset-0 -z-[1] -m-1 inline-block text-black/20 dark:text-white/20 ${classToApply}`}
      ></div>
    </div>
  );
};
export default FancyClickEffect;
