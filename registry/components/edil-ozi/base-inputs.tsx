import { FC } from "react";

import useCopyToClipboard from "@/hooks/useCopyToClipboard";

import CardWrapper from "@/components/card-wrapper";

interface Props {}

const BaseInputs: FC<Props> = () => {
  const { copy } = useCopyToClipboard();

  const buttons = [
    //add toast with message
    {
      name: "Search...",
      component: (
        <input
          type="text"
          className="h-10 w-full rounded-md border-2 border-slate-300 bg-slate-200 px-3 py-1.5 text-black shadow-lg focus:border-slate-600 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:dark:border-slate-400"
          placeholder="Search..."
        />
      ),
    },

    {
      name: "Password",
      message: "Copied with all functionality!",
      component: (
        <label className="group flex h-10 rounded-md border-2 border-stone-300 bg-stone-200 pl-4 dark:border-stone-600 dark:bg-stone-800">
          <input
            type="password"
            className="h-full w-full bg-transparent focus:outline-none"
            placeholder="Password"
          />
          <button
            type="button"
            className="border-l-2 border-stone-300 px-2 dark:border-stone-500"
          >
            <svg
              className="h-5 w-5 fill-stone-500 opacity-80 hover:opacity-100 dark:fill-stone-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"></path>
            </svg>
          </button>
        </label>
      ),
      code: `
        'use client'
        import { useState } from "react";
        
        const PasswordInput = () => {
          const [show, setShow] = useState(true)
          return (
            <label className="z-10 h-10 flex bg-stone-200 dark:bg-stone-800 rounded-md pl-4 border-2 border-stone-300 dark:border-stone-600 ">
              <input
                type={show ? 'text' : 'password'}
                className="w-full h-full bg-transparent text-sm focus:outline-none"
                placeholder="Password"
              />
              <button type="button" onClick={() => setShow(!show)} className="border-l-2 border-stone-300 dark:border-stone-500 px-2">
                {show ? (
                  <svg className="w-5 h-5 fill-stone-500 dark:fill-stone-500 opacity-80 hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"></path></svg>
                ) :
                  <svg className="w-5 h-5 fill-stone-500 dark:fill-stone-500 opacity-80 hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"></path></svg>
                }
              </button>
            </label>
          )
        };
      `,
    },
    {
      name: "Type something...",
      component: (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="ease relative flex h-10 w-full items-center rounded-[30px] bg-gray-100 pl-3 pr-3 duration-500 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-center before:scale-x-0 before:rounded-[1px] before:bg-lime-600 before:transition-all before:duration-500 before:content-[''] focus-within:rounded-[1px] focus-within:before:scale-100 dark:bg-gray-800 dark:before:bg-lime-500"
        >
          <button
            tabIndex={-1}
            type="button"
            className="mr-1 border-none bg-none text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-600 dark:focus:ring-lime-500"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <input
            className="h-full w-full bg-transparent text-[0.9rem] text-black focus:outline-none dark:text-white [&:not(:placeholder-shown)~button]:visible [&:not(:placeholder-shown)~button]:opacity-100"
            placeholder="Type something..."
            required
            type="text"
          />
          <button
            type="reset"
            className="invisible border-none text-gray-400 opacity-0 focus:outline-none focus:ring-2 focus:ring-lime-600 dark:focus:ring-lime-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </form>
      ),
    },
    {
      name: "Enter text...",
      component: (
        <input
          type="text"
          placeholder="Enter text..."
          className="h-10 w-full rounded-sm border-2 border-gray-400 bg-gray-100 px-3 text-black focus:border-blue-500 focus:shadow-[0_0_0_0.2rem_rgba(0,123,255,0.30)] focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-600 dark:focus:shadow-[0_0_0_0.2rem_rgba(0,111,200,0.45)]"
        />
      ),
    },
  ];

  return (
    <div className="w-full px-4 pb-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
        {buttons.map((btn) => (
          <CardWrapper
            key={btn.name}
            onClick={() => copy(btn)}
          >
            {btn.component}
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

export default BaseInputs;
