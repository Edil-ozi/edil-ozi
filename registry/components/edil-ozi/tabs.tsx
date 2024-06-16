import { createContext, FC, ReactNode, useContext, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface TabsProps {
  value?: string | number;
  onChange?: any;
  children?: ReactNode;
  className?: string;
  activeClassName?: string;
}
interface TabProps {
  value: string;
  className?: string;
  children?: ReactNode;
}
type ActiveItem = {
  item: string;
  width: number;
  height: number;
  left: number;
  top: number;
};
interface TabsContextType {
  active: ActiveItem;
  handleChange: (value: ActiveItem) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabsContext = (): TabsContextType => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("No context found for Tabs");
  }
  return context;
};

const TabContainer: FC<TabsProps> = ({ children, onChange, className }) => {
  const [active, setActive] = useState({ item: "", width: 0, height: 0, left: 0, top: 0 });

  const handleChange = (value: ActiveItem) => {
    setActive(value);
    onChange?.(value.item);
  };

  return (
    <TabsContext.Provider value={{ active, handleChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

const Tabs: FC<TabsProps> = ({ children, className, activeClassName }) => {
  const { active, handleChange } = useTabsContext();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let defaultItem = { item: "", width: 0, height: 0, left: 0, top: 0 };
    if (ref.current && ref.current.children.length >= 0 && ref.current.firstElementChild instanceof HTMLElement) {
      defaultItem = {
        item: ref.current.firstElementChild?.dataset.value || ref.current.firstElementChild?.innerText,
        width: ref.current.firstElementChild?.clientWidth,
        height: ref.current.firstElementChild?.clientHeight,
        left: ref.current.firstElementChild?.offsetLeft,
        top: ref.current.firstElementChild?.offsetTop,
      };
    }
    handleChange(defaultItem);
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "bg relative flex flex-nowrap gap-2 overflow-auto rounded-md bg-slate-100 p-2 shadow-md dark:bg-zinc-900",
        className,
      )}
    >
      {children}
      <span
        style={{ width: active.width, height: active.height, left: active.left, top: active.top, margin: 0 }}
        className={cn(
          "z-1 absolute h-full rounded-sm bg-slate-200 transition-all duration-200 ease-in-out dark:bg-zinc-800",
          activeClassName,
        )}
      ></span>
    </div>
  );
};

const Tab: FC<TabProps> = ({ children, className, value }) => {
  const { handleChange } = useTabsContext();

  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    let item = { item: "", width: 0, height: 0, left: 0, top: 0 };
    if (ref.current && ref.current instanceof HTMLElement) {
      item = {
        item: ref.current?.dataset.value || ref.current?.innerText,
        width: ref.current?.clientWidth,
        height: ref.current?.clientHeight,
        left: ref.current?.offsetLeft,
        top: ref.current?.offsetTop,
      };
    }
    handleChange(item);
  };

  return (
    <button
      data-value={value}
      onClick={handleClick}
      ref={ref}
      className={cn(`z-10 text-nowrap rounded-sm px-6 py-2 transition-colors duration-200`, className)}
    >
      {children}
    </button>
  );
};

const TabPanel: FC<TabProps> = ({ children, value, className }) => {
  const { active } = useTabsContext();
  if (!(value === active.item)) return;
  return (
    <div className={cn("mt-2 rounded-md bg-slate-100 px-6 py-4 shadow-md dark:bg-zinc-900", className)}>{children}</div>
  );
};

export { Tabs, Tab, TabContainer, TabPanel };
