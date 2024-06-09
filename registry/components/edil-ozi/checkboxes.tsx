import CardWrapper from "@/components/card-wrapper";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";

const Checkboxes = () => {
  const { copy } = useCopyToClipboard();
  const checkboxes = [
    {
      name: "With gradient shadow",

      component: (
        <label className="relative block cursor-pointer select-none text-3xl">
          <input
            className="peer hidden"
            type="checkbox"
          />
          <div className="duration-[250ms] after:duration-[250ms,border-width_0.1s] after:delay-[0.1s] relative left-0 top-0 h-[1.6rem] w-[1.6rem] rounded-[0.3em] bg-white transition-all after:absolute after:left-0 after:top-0 after:h-[1.6rem] after:w-[1.6rem] after:rotate-0 after:rounded-[0.25em] after:border-[2px] after:border-[rgba(0,0,0,0.863)] after:transition-all after:content-[''] peer-checked:bg-black

          peer-checked:shadow-[-13px_-13px_40px_0px_rgb(17,0,248),13px_-0_40px_0px_rgb(243,11,243),13px_-13px_40px_0px_rgb(253,228,0),13px_0_40px_0px_rgb(107,255,21),13px_13px_40px_0px_rgb(76,0,255),13px_13px_40px_0px_rgb(255,196,0),-13px_13px_40px_0px_rgb(90,105,240)]

          peer-checked:after:left-2 peer-checked:after:top-[1px] peer-checked:after:h-[0.6em] peer-checked:after:w-[0.35em] peer-checked:after:rotate-45 peer-checked:after:rounded-[0em] peer-checked:after:border-b-[0.1em] peer-checked:after:border-r-[0.1em] peer-checked:after:border-[rgba(238,238,238,0)_white_white_#fff0] dark:bg-black dark:after:border-[rgba(255,255,255,0.863)] dark:peer-checked:bg-white dark:peer-checked:after:border-[rgba(238,238,238,0)_black_black_#fff0]"></div>
        </label>
      ),
      message: "Successfulty copied",
    },
    {
      name: "Just a normal checbox",

      component: (
        <input
          type="checkbox"
          className="border-1 after:ease-[cubic-bezier(0.12,0.4,0.29,1.46)] before:duration-[0.1s] before:ease-[cubic-bezier(0.71,-0.46,0.88,0.6),opacity] before:delay-[0.1s] checked:before:duration-[0.2s] checked:before:ease-[cubic-bezier(0.12,0.4,0.29,1.46)] checked:before:delay-[0.1s] relative box-border block h-[1.5rem] w-[1.5rem] cursor-pointer appearance-none rounded-md border-[#d9d9d9] bg-slate-200 transition-all duration-300 before:absolute before:left-2/4 before:top-[42%] before:h-[10px] before:w-[6px] before:-translate-x-2/4 before:-translate-y-2/4 before:rotate-45 before:scale-0 before:border-b-2 before:border-r-2 before:border-solid before:border-b-[#fff] before:border-r-[#fff] before:opacity-0 before:transition-all before:content-[''] after:absolute after:inset-0 after:rounded-[7px] after:opacity-0 after:shadow-[0_0_0_calc(30px_/_2.5)_#1677ff] after:transition-all after:duration-500 after:content-[''] checked:border-transparent checked:bg-[#1677ff] checked:before:-translate-x-2/4 checked:before:-translate-y-2/4 checked:before:rotate-45 checked:before:scale-x-[1.4] checked:before:scale-y-[1.4] checked:before:opacity-100 checked:before:transition-all hover:border-[#1677ff] [&:active:not(:checked)]:after:opacity-100 [&:active:not(:checked)]:after:shadow-none [&:active:not(:checked)]:after:transition-none"
        />
      ),
    },
    {
      name: "Checkbox with animation",

      component: (
        <label className="relative block cursor-pointer select-none text-2xl">
          <input
            type="checkbox"
            className="peer absolute h-0 w-0 cursor-pointer opacity-0"
          />
          <div className="relative left-0 top-0 h-[1.5rem] w-[1.5rem] rounded-[50%] bg-slate-200 transition-[300ms] after:absolute after:left-[0.5rem] after:top-1 after:hidden after:h-[0.8rem] after:w-[0.5rem] after:rotate-45 after:border-b-[0.2rem] after:border-r-[0.2rem] after:content-[''] peer-checked:animate-pulse peer-checked:rounded-lg peer-checked:bg-[#0b6e4f] peer-checked:after:block"></div>
        </label>
      ),
      animation: `
        theme: {
          extend:{
            keyframes: {
              "pulse": {
                "0%": {
                  boxShadow: "0 0 0 #0B6E4F90",
                  rotate: "{20deg}",
                },
                "50%": {
                  rotate: "-20deg",
                },

                "75%": {
                  boxShadow: "0 0 0 10px #0B6E4F60",
                },

                "100%": {
                  boxShadow: "0 0 0 13px #0B6E4F30",
                  rotate: "0",
                },
              }
            }
            "animation": {
              "pulse": "pulse 500ms ease-in-out",
            },
          }
        }`,
    },
    {
      name: "Box to checkbox",

      component: (
        <label className="block h-[1.5rem] w-[1.5rem] cursor-pointer">
          <input
            type="checkbox"
            className="peer hidden"
          />
          <span className="duration-[375ms] peer-checked:h-5.5 block h-[inherit] w-[inherit] rounded-md border-[2px] border-black transition-all peer-checked:ml-1 peer-checked:border-b-[2px] peer-checked:w-3.5 peer-checked:translate-y-[-3px] peer-checked:rotate-45 peer-checked:rounded-none peer-checked:border-l-transparent peer-checked:border-t-transparent dark:border-white" />
        </label>
      ),
    },
    {
      name: "List like checkbox",

      component: (
        <>
          <label className="flex min-w-56 cursor-pointer items-center justify-between rounded-md bg-white/40 dark:bg-zinc-800/80 p-3 shadow hover:bg-white/20 has-[:checked]:bg-white/30 dark:has-[:checked]:text-sky-200 has-[:checked]:text-indigo-400 has-[:checked]:ring-2 dark:has-[:checked]:ring-sky-200 has-[:checked]:ring-indigo-200">
            <div className="flex items-center space-x-5">
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 text-black dark:text-white"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  >
                  <path
                    fill-rule="evenodd"
                    d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                    clip-rule="evenodd"
                    ></path>
                </svg>
                <span className="text-black dark:text-white"> Pay </span>
              </div>
              <h2 className="text-lg">Google Pay</h2>
            </div>
            <input type="checkbox" className="hidden peer"/>
            <div className="relative h-[20px] w-[20px] bg-slate-200 border-[3px] border-[#eee]  rounded-[50%] left-0 top-0 after:content-[''] after:absolute after:hidden after:w-[0.25em] after:h-[0.5em] peer-checked:bg-blue-400 peer-checked:after:block;"></div>
          </label>

          <label className="flex relative hover:bg-[rgba(0,119,255,0.1)] rounded-md cursor-pointer pl-12 py-1 pr-5 after:content-[''] after:absolute after:top-[10px] after:left-3.5 after:block after:w-5 after:h-5 after:rounded-[2px] after:transition-all after:duration-200 after:border after:border-slate-200 hover:after:border-[#07f] has-[:checked]:after:bg-[#07f] has-[:checked]:after:animate-wave has-[:checked]:after:border-[#07f] text-2xl">
            <input type="checkbox" className="hidden peer" />
            <span className="">Morning</span>
          </label>
        </>
      ),

      className: "col-span-2",

      animation: `
      theme: {
        extend:{
          keyframes: {
            "wave": {
              "50%": {
                transform: "scale(0.9)",
              },
            },
          }
          "animation": {
            "wave": "wave 300ms ease",
          },
        }
      }
      `
    },
    {
      name: "Like",

      component: (
        <div className="flex gap-8 flex-wrap w-44 sm:w-auto justify-center">
        <label className="h-10 group w-10 block relative cursor-pointer select-none transition-[100ms] hover:scale-110">
          <input type="checkbox" className="hidden" />
            <svg viewBox="0 0 256 256" className="h-[40px] w-[40px] p-1 transition-100 left-0 top-0 group-has-[:checked]:animate-like animate-dislike">
            <path className="group-has-[:checked]:fill-red-700  fill-slate-200 group-has-[:checked]:stroke-none" d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" strokeWidth="20px"></path>
            </svg>
        </label>

        <label className="h-10 group w-10 block relative cursor-pointer select-none transition-[100ms] hover:scale-110">
          <input type="checkbox" className="hidden" />
            <svg viewBox="0 0 24 24" className="h-[40px] w-[40px] transition-100 left-0 top-0 group-has-[:checked]:animate-like animate-dislike">
            <path className="group-has-[:checked]:fill-[#1c7dff] group-has-[:checked]:stroke-[1.2] dark:stroke-black stroke-white fill-slate-200 group-has-[:checked]:stroke-white dark:group-has-[:checked]:stroke-[#212121]" d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"></path>
            </svg>
        </label>
        <label className="h-10 group w-10 block relative cursor-pointer select-none transition-[100ms] hover:scale-110">
          <input type="checkbox" className="hidden" />
            <svg viewBox="0 0 24 24" className="h-[40px] w-[40px] transition-100 left-0 top-0 group-has-[:checked]:animate-like animate-dislike">
            <path className="group-has-[:checked]:fill-[#1c7dff] group-has-[:checked]:stroke-[1.2] dark:stroke-black stroke-white fill-slate-200 group-has-[:checked]:stroke-white dark:group-has-[:checked]:stroke-[#212121]" d="M8 14V4M8 14L4 14V4.00002L8 4M8 14L13.1956 20.0615C13.6886 20.6367 14.4642 20.884 15.1992 20.7002L15.2467 20.6883C16.5885 20.3529 17.1929 18.7894 16.4258 17.6387L14 14H18.5604C19.8225 14 20.7691 12.8454 20.5216 11.6078L19.3216 5.60779C19.1346 4.67294 18.3138 4.00002 17.3604 4.00002L8 4"></path>
            </svg>
        </label>

        <label className="ui-bookmark">
          <input type="checkbox" className="peer hidden" />
          <div className="p-[6px] w-[40px] h-[40px] fill-slate-200 transition-all duration-200 cursor-pointer flex justify-center items-center relative origin-top peer-checked:delay-100 peer-checked:fill-[gold] peer-checked:animate-[bookmark_300ms_forwards] after:content-[''] after:absolute after:w-2.5 after:h-2.5 after:shadow-[0_30px_0_-4px_gold,30px_0_0_-4px_gold,0_-30px_0_-4px_gold,-30px_0_0_-4px_gold,-22px_22px_0_-4px_gold,-22px_-22px_0_-4px_gold,22px_-22px_0_-4px_gold,22px_22px_0_-4px_gold] after:rounded-[50%] after:scale-0 peer-checked:after:animate-[circles_300ms_cubic-bezier(0.175,0.885,0.32,1.275)_forwards] peer-checked:after:delay-500 before:content-[''] before:absolute before:border-[1px] before:opacity-0 before:rounded-[50%] before:border-[gold] peer-checked:before:delay-500 peer-checked:before:animate-[circle_300ms_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]
          ">
            <svg viewBox="0 0 32 32">
                <path
                  d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"
                ></path>
            </svg>
          </div>
        </label>
        </div>
      ),

      className: "col-span-2",

    },
  ];
  const listCheckboxes = [

    // {
    //   component: (
    //     <label
    //       className="group z-[1] flex h-[2.5em] min-w-56 cursor-pointer flex-row items-center justify-center border border-solid border-[black] dark:border-white bg-white dark:bg-black p-[0.5em] text-xl font-semibold text-[black] dark:text-white shadow-[6px_6px_0px_black] dark:shadow-[6px_6px_0px_white] transition-[0.4s] hover:translate-x-1.5 hover:translate-y-1.5 hover:cursor-pointer hover:border-[none] hover:bg-[black] dark:hover:bg-white hover:text-[white] dark:hover:shadow-none hover:shadow-none"
    //       htmlFor="checkbox"
    //       id="themeswitch"
    //     >
    //       <input
    //         type="checkbox"
    //         id="checkbox"
    //         className="peer hidden"
    //       />
    //       <div className=" transition-all absolute ml-[6.2em] h-[25px] w-[25px] rotate-[-120deg] rounded-[50%] border-4 border-solid border-[#222] bg-[#222] shadow-[inset_0px_6px_#999,inset_0px_6px_1px_1px_#999] duration-300 ease-in-out peer-checked:rotate-[360deg] peer-checked:border-4 peer-checked:border-[#F28C38] peer-checked:bg-[#F28C38] peer-checked:shadow-[inset_0px_6px_#F28C38,inset_0px_6px_1px_1px_#F28C38]"></div>
    //       <span className="before:ease-in-out after:ease-in-out before:mr-[2em] before:text-[black] dark:before:text-white before:transition-200 before:content-['Dark_Mode'] after:mr-[1.7em] after:hidden after:text-[black] dark:after:text-white after:transition-200 after:content-['Light_Mode'] group-hover:before:text-white group-hover:after:text-white dark:group-hover:before:text-black dark:group-hover:after:text-black peer-checked:before:hidden peer-checked:after:block"></span>
    //       <div className="back"></div>
    //     </label>
    //   ),
    // },

  ];
  return (
    <div className="w-full px-4 pb-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {checkboxes.map((checkbox) => (
          <CardWrapper
            key={checkbox.name}
            onClick={() => copy(checkbox)}
            className={`col-span-2 ${checkbox.className || "sm:col-span-1"} min-h-52 lg:h-52`}
          >
            <div className="flex flex-col items-center gap-4 xl:gap-8 text-center p-1">
              {checkbox.component}
              {checkbox.name}
            </div>
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

export default Checkboxes;
