'use client'

import { ChevronDown } from 'lucide-react'

import { useEffect, useRef, useState } from 'react'

interface Props {
  items: { name: string; link: string }[],
  text: string,
}
export default function Dropdown({ items, text, }: Props) {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false)
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function close(e: any) {
        setIsActiveDropdown(false)
    }

    document.addEventListener("click", close);

    return () => document.removeEventListener("click", close)
  })

  return (
    <div
      data-state={isActiveDropdown ? 'open' : 'closed'}
      className="relative group text-text"
    >
      <button
        aria-haspopup="listbox"
        aria-expanded={isActiveDropdown}
        onClick={() => {
          setIsActiveDropdown(!isActiveDropdown);
        }}
        className="peer flex w-fit cursor-pointer items-center justify-center rounded-sm bg-slate-100 dark:bg-zinc-900 border-2 border-slate-200 dark:border-zinc-800 px-7 py-3 hover:bg-slate-200 dark:hover:bg-zinc-800"
      >
          <span className='ml-1'>
            {text}
          </span>
          <ChevronDown
            className={
              'ml-2 h-5 w-5 transition-transform group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 ease-in-out'
            }
          />
      </button>
      <div
        ref={ref}
        role="listbox"
        className="absolute bg-slate-100 dark:bg-zinc-900 left-1/2 w-fit -translate-x-1/2 group-data-[state=open]:top-16 group-data-[state=open]:opacity-100 group-data-[state=closed]:invisible group-data-[state=closed]:top-[50px] group-data-[state=closed]:opacity-0 group-data-[state=open]:visible rounded-sm overflow-hidden text-center font-base shadow-light dark:shadow-dark transition-all"
      >
        {items.map((item, index) => 
            <a
              key={index}
              href={item.link}
              className="block w-full first:border-t-2 border-b-2 border-x-2  border-border dark:border-darkBorder bg-main px-7 py-3 no-underline first:rounded-t-base last:rounded-b-base hover:bg-mainAccent hover:bg-slate-200 dark:hover:bg-zinc-800"
            >
              {item.name}
            </a>
          )
        }
      </div>
    </div>
  )
}