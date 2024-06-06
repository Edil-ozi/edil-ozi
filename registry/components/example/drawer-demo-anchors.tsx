import { Dispatch, SetStateAction, useState } from "react";
import Drawer from "../edil-ozi/drawer";

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
const buttons = ["left", "right", "top", "bottom"];

const DrawerDemo = () => {
  const [drawer, setDrawer] = useState({ open: false, anchor: "left" });

  const toggleDrawer = (value: boolean) => {
    setDrawer({ ...drawer, open: value });
  };

  return (
    <>
      <div className="z-10 space-x-2">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => setDrawer({ anchor: button, open: true })}
            className="rounded-sm px-4 py-2 first-letter:uppercase hover:bg-zinc-200 dark:hover:bg-zinc-900 dark:active:bg-zinc-800"
          >
            {button}
          </button>
        ))}
      </div>
      <Drawer
        open={drawer.open}
        setOpen={toggleDrawer as Dispatch<SetStateAction<boolean>>}
        anchor={drawer.anchor as any}
      >
        <ul className="h-full bg-zinc-900">
          {items.map((item) => (
            <li
              key={item}
              className="cursor-pointer border-b border-b-zinc-800 p-4 hover:bg-zinc-800"
            >
              {item}
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
};

export default DrawerDemo;
