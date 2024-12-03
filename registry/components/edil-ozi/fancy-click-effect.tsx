import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, useState } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const FancyClickEffect: FC<Props> = ({ children, ...rest }) => {
  const [isHolding, setIsHolding] = useState<boolean | undefined>(undefined);

  const handleMouseDown = () => {
    setIsHolding(true)
  };

  const handleMouseUpOrLeave = () => {

    if (isHolding) {
      setIsHolding(false)
    };
  };

  // prevent applying styles on first rendering with checking for "undefined" value
  const classToApply = isHolding === undefined ? '' : isHolding ? "bg-black/10 dark:bg-white/10" : "animate-fade-out";
  return (
    <div
      className="relative z-10 bg-black/10 dark:bg-white/10 max-w-max"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      {...rest}
    >
      {children}

      <div className={`absolute inline-block text-black/20 dark:text-white/20 -z-[1] pointer-events-none -m-1 inset-0 ${classToApply}`}></div>
    </div>
  );
};
export default FancyClickEffect;
