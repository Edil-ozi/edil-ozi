import { createPortal } from "react-dom";
import { Dispatch, useCallback, useEffect, useState } from "react";

type Anchor = "left" | "right" | "top" | "bottom";

interface Props {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  children: string | JSX.Element | JSX.Element[];
  anchor?: Anchor;
}

const styles = {
  left: "top-0 data-[visible=false]:translate-x-[-100%] data-[visible=true]:translate-x-0",
  right: "top-0 right-0 data-[visible=false]:translate-x-[100%] data-[visible=true]:translate-x-0",
  top: "top-0 w-full flex-col h-fit data-[visible=false]:translate-y-[-100%] data-[visible=true]:translate-y-0",
  bottom: "bottom-0 w-full flex-col h-fit data-[visible=false]:translate-y-[100%] data-[visible=true]:translate-y-0",
};

export default function Drawer({ open, setOpen, children, anchor = "left" }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const closeDrawer = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setOpen(false);
    }, 200);
  }, [setOpen]);

  useEffect(() => {
    if (open) setIsVisible(true);

    const handleClose = (e: KeyboardEvent) => {
      if (e.code === "Escape") closeDrawer();
    };

    document.addEventListener("keydown", handleClose);

    return () => document.removeEventListener("keydown", handleClose);
  }, [open, closeDrawer]);

  if (!open) return null;

  return createPortal(
    <>
      <div
        data-visible={isVisible ? "true" : "false"}
        onClick={closeDrawer}
        className="fixed left-0 top-0 z-[100] flex h-[100dvh] w-screen bg-zinc-900/20 backdrop-blur-sm transition-all duration-200 data-[visible=true]:visible data-[visible=false]:invisible data-[visible=false]:opacity-0 data-[visible=true]:opacity-100"
      />
      <div
        data-visible={isVisible ? "true" : "false"}
        className={`font-base fixed z-[101] h-full min-w-60 text-white shadow-md shadow-zinc-400 transition-transform duration-300 dark:shadow-zinc-950 ${styles[anchor]}`}
      >
        {children}
      </div>
    </>,
    document.body as HTMLElement,
  );
}