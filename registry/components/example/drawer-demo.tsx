import { useState } from "react";
import Drawer from "../edil-ozi/drawer";

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

const DrawerDemo = () => {
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  return (
    <div className="z-10">
      <button
        onClick={() => setIsDrawerActive(true)}
        className="rounded-sm px-4 py-2 first-letter:uppercase hover:bg-zinc-200 dark:hover:bg-zinc-900 dark:active:bg-zinc-800"
      >
        Open Drawer
      </button>

      <Drawer
        open={isDrawerActive}
        setOpen={setIsDrawerActive}
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
    </div>
  );
};

export default DrawerDemo;
