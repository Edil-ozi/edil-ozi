'use client'
import {
  Children,
  cloneElement,
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

interface Children {
  children: ReactNode;
}

interface AccordionProps extends Children {
  multiple?: boolean;
}
interface AccordionItemProps extends Children {
  value: string;
  className?: string;
  disabled?: boolean;
}
interface AccordionSummary extends Children {
  expandIcon?: ReactNode;
  isExpanded?: boolean;
  handleClick?: () => void;
  setHeights?: (prev: {}) => void;
}
interface AccordionDetails extends Children {
  setHeights?: (prev: {}) => void;
}
interface AccordionContextType {
  activeItem: string;
  setToggle: (value: string) => void;
  multiple: boolean;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

const useAccordionContext = (): AccordionContextType => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("No context found for Accordion");
  }
  return context;
};

const Accordion: FC<AccordionProps> = ({ children, multiple = true }) => {
  const [activeItem, setActiveItem] = useState("");

  const setToggle = (value: string) => {
    setActiveItem(() => (activeItem !== value ? value : ""));
  };

  return (
    <AccordionContext.Provider value={{ activeItem, setToggle, multiple }}>
      <div className="w-full">{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionSummary: FC<AccordionSummary> = ({ children, isExpanded, handleClick, setHeights, expandIcon }) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current !== null) {
      setHeights?.((prev: {}) => ({ ...prev, summary: ref.current?.clientHeight }));
    }
  }, [setHeights]);

  return (
    <button
      ref={ref}
      className="flex w-full cursor-pointer items-center justify-between p-4 font-medium"
      onClick={handleClick}
    >
      <span>{children}</span>
      <span className={`transition ${isExpanded && "rotate-180"}`}>
        {!expandIcon ? (
          <svg
            fill="none"
            width="24"
            height="24"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        ) : (
          expandIcon
        )}
      </span>
    </button>
  );
};

const AccordionDetails: FC<AccordionDetails> = ({ children, setHeights }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current !== null) {
      setHeights?.((prev: {}) => ({ ...prev, details: ref.current?.clientHeight }));
    }
  }, [setHeights]);
  return (
    <div
      ref={ref}
      className={`px-4 pb-5 pt-1 text-neutral-900 dark:text-neutral-300`}
    >
      {children}
    </div>
  );
};

const AccordionItem: FC<AccordionItemProps> = ({ children, value, className, disabled }) => {
  const { activeItem, setToggle, multiple } = useAccordionContext();
  const [activeItemMultiple, setActiveItemMultiple] = useState("");
  const [heights, setHeights] = useState({ summary: 0, details: 0 });

  const isExpanded = !multiple ? activeItem === value : activeItemMultiple === value;
  const height = isExpanded ? heights.summary + heights.details : heights.summary;

  const handleClick = () => {
    if (!multiple) {
      setToggle(value);
    } else {
      setActiveItemMultiple(() => (activeItemMultiple !== value ? value : ""));
    }
  };

  return (
    <div
      style={{ height: `${height}px` }}
      className={cn(
        `box-content overflow-hidden border-b border-b-neutral-300 bg-gray-100 shadow-sm shadow-zinc-400 transition-all duration-200 ease-in-out first:rounded-t-sm last:rounded-b-sm dark:border-b-neutral-800 dark:bg-zinc-900 dark:shadow-zinc-950 ${isExpanded && "border-b-0 first:mb-4 last:mt-4 [&:not(:last-child):not(:first-child)]:my-4"} ${disabled && "bg-neutral-300 text-neutral-500 dark:bg-neutral-800"}`,
        className,
      )}
    >
      {Children.map(children, (child) => {
        return cloneElement(child as ReactElement, {
          isExpanded: isExpanded,
          handleClick: !disabled ? handleClick : null,
          setHeights: setHeights,
        });
      })}
    </div>
  );
};

export { Accordion, AccordionItem, AccordionSummary, AccordionDetails };
