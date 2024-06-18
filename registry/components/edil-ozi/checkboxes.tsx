import CardWrapper from "@/components/card-wrapper";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
function Checkboxes() {
  const { copy } = useCopyToClipboard();
  const checkboxes = [
    {
      name: "Just a normal one",
      component: (
        <input
          type="checkbox"
          className="border-1 relative box-border block h-[1.5rem] w-[1.5rem] cursor-pointer appearance-none rounded-md border-[#d9d9d9] bg-slate-200 transition-all duration-300 before:absolute before:left-2/4 before:top-[42%] before:h-[10px] before:w-[6px] before:-translate-x-2/4 before:-translate-y-2/4 before:rotate-45 before:scale-0 before:border-b-2 before:border-r-2 before:border-solid before:border-b-white before:border-r-white before:opacity-0 before:transition-all before:delay-100 before:duration-100 before:ease-in before:content-[''] after:absolute after:inset-0 after:rounded-[7px] after:opacity-0 after:shadow-[0_0_0_calc(30px_/_2.5)_#1677ff] after:transition-all after:duration-500 after:ease-in after:content-[''] checked:border-transparent checked:bg-[#1677ff] checked:before:-translate-x-2/4 checked:before:-translate-y-2/4 checked:before:rotate-45 checked:before:scale-x-[1.4] checked:before:scale-y-[1.4] checked:before:opacity-100 checked:before:transition-all checked:before:delay-100 checked:before:duration-200 checked:before:ease-in hover:border-[#1677ff] focus:outline-[#1677ff] [&:active:not(:checked)]:after:opacity-100 [&:active:not(:checked)]:after:shadow-none [&:active:not(:checked)]:after:transition-none"
        />
      ),
    },
    {
      name: "With gradient shadow",
      component: (
        <label className="relative block cursor-pointer select-none rounded-md text-3xl outline-2 outline-offset-1 outline-gray-700 has-[:focus]:outline">
          <input
            className="peer absolute opacity-0"
            type="checkbox"
          />
          <div className="relative left-0 top-0 h-[1.6rem] w-[1.6rem] rounded-[0.3em] bg-white transition-all duration-300 after:absolute after:left-0 after:top-0 after:h-[1.6rem] after:w-[1.6rem] after:rotate-0 after:rounded-[0.3em] after:border-[2px] after:border-[rgba(0,0,0,0.863)] after:transition-all after:delay-100 after:duration-300 after:content-[''] peer-checked:bg-black peer-checked:shadow-[-13px_-13px_40px_0px_rgb(17,0,248),13px_-0_40px_0px_rgb(243,11,243),13px_-13px_40px_0px_rgb(253,228,0),13px_0_40px_0px_rgb(107,255,21),13px_13px_40px_0px_rgb(76,0,255),13px_13px_40px_0px_rgb(255,196,0),-13px_13px_40px_0px_rgb(90,105,240)] peer-checked:after:left-2 peer-checked:after:top-[1px] peer-checked:after:h-[0.6em] peer-checked:after:w-[0.35em] peer-checked:after:rotate-45 peer-checked:after:rounded-[0em] peer-checked:after:border-b-[0.1em] peer-checked:after:border-r-[0.1em] peer-checked:after:border-[rgba(238,238,238,0)_white_white_#fff0] dark:bg-black dark:after:border-[rgba(255,255,255,0.863)] dark:peer-checked:bg-white dark:peer-checked:after:border-[rgba(238,238,238,0)_black_black_#fff0]"></div>
        </label>
      ),
      message: "Successfulty copied",
    },
    {
      name: "With animation",
      component: (
        <label className="relative block cursor-pointer select-none rounded-full text-2xl outline-2 outline-offset-1 outline-[#0b6e4f] has-[:checked]:rounded-md has-[:focus]:outline">

          <input
            type="checkbox"
            className="peer absolute h-0 w-0 opacity-0"
          />
          <div className="relative left-0 top-0 h-[1.5rem] w-[1.5rem] rounded-[50%] bg-slate-200 transition-[300ms] after:absolute after:left-[0.5rem] after:top-1 after:hidden after:h-[0.8rem] after:w-[0.5rem] after:rotate-45 after:border-b-[0.2rem] after:border-r-[0.2rem] after:content-[''] focus:outline-[#0b6e4f] peer-checked:animate-pulse peer-checked:rounded-lg peer-checked:bg-[#0b6e4f] peer-checked:after:block"></div>
        </label>
      ),
      extra: ` theme: { extend:{ keyframes: { "pulse": { "0%": { boxShadow: "0 0 0 #0B6E4F90", rotate: "{20deg}", }, "50%": { rotate: "-20deg", }, "75%": { boxShadow: "0 0 0 10px #0B6E4F60", }, "100%": { boxShadow: "0 0 0 13px #0B6E4F30", rotate: "0", }, } } "animation": { "pulse": "pulse 500ms ease-in-out", }, } }`,
    },
    {
      name: "Transformer",
      component: (
        <label className="relative block h-[1.5rem] w-[1.5rem] cursor-pointer rounded-sm outline-2 outline-offset-1 outline-gray-700 has-[:focus]:outline">
          <input
            type="checkbox"
            className="peer absolute h-0 w-0 opacity-0"
          />
          <span className="block h-[inherit] w-[inherit] rounded-md border-[2px] border-black transition-all duration-300 peer-checked:ml-1 peer-checked:h-5 peer-checked:w-3 peer-checked:translate-x-[2px] peer-checked:translate-y-[-1px] peer-checked:rotate-45 peer-checked:rounded-none peer-checked:border-b-[2px] peer-checked:border-l-transparent peer-checked:border-t-transparent dark:border-white" />
        </label>
      ),
    },
  ];
  return (
    <div className="w-full px-4 pb-40">

      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {checkboxes.map((checkbox) => (
          <CardWrapper
            key={checkbox.name}
            onClick={() => copy(checkbox)}
          >

            <div className="flex flex-col items-center gap-4 p-1 text-center xl:gap-8">

              {checkbox.component} {checkbox.name}
            </div>
          </CardWrapper>
        ))}
      </div>
    </div>
  );
}
export default Checkboxes;
