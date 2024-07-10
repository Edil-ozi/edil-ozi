"use client";

import { ChevronDown } from "lucide-react";

import { useEffect, useRef, useState } from "react";

interface Props {
  items: { name: string; link: string }[];
  text: string;
}
export default function Dropdown({ items, text }: Props) {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function close() {
      setIsActiveDropdown(false);
    }

    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  });

  return (
    <div
      data-state={isActiveDropdown ? "open" : "closed"}
      className="text-text group relative"
    >
      <button
        aria-haspopup="listbox"
        aria-expanded={isActiveDropdown}
        onClick={() => {
          console.log("clicked");
          setIsActiveDropdown(!isActiveDropdown);
        }}
        className="peer flex w-fit cursor-pointer items-center justify-center rounded-sm border-2 border-slate-200 bg-slate-100 px-7 py-3 hover:bg-slate-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      >
        <span className="ml-1">{text}</span>
        <ChevronDown
          className={
            "ml-2 h-5 w-5 transition-transform ease-in-out group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-180"
          }
        />
      </button>
      <div
        ref={ref}
        role="listbox"
        className="font-base shadow-light dark:shadow-dark absolute left-1/2 w-fit -translate-x-1/2 overflow-hidden rounded-sm bg-slate-100 text-center transition-all group-data-[state=open]:visible group-data-[state=closed]:invisible group-data-[state=closed]:top-[50px] group-data-[state=open]:top-16 group-data-[state=closed]:opacity-0 group-data-[state=open]:opacity-100 dark:bg-zinc-900"
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className="dark:border-darkBorder bg-main first:rounded-t-base last:rounded-b-base hover:bg-mainAccent block w-full border-x-2 border-b-2 border-border px-7 py-3 no-underline first:border-t-2 hover:bg-slate-200 dark:hover:bg-zinc-800"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
