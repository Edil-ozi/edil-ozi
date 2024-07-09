import { FC, Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {}

export const navLinks = [
  { title: "Edil Ozi", href: "#" },
  { title: "About", href: "#" },
  { title: "Components", href: "#" },
  { title: "Sections", href: "#" },
];

const Index: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  //remove rem, make mobile first
  return (
    <section className="z-10 mx-auto h-[480px] w-full max-w-[1440px] bg-neutral-50">
      <header className="base-x-padding relative bg-neutral-100 px-6 py-4 text-black">
        <div className="flex items-center justify-between xl:space-x-4">
          <div className="z-[103]">Logo</div>

          <nav
            className={cn(
              `invisible absolute left-0 top-0 z-[101] h-[480px] w-full -translate-y-5 select-none bg-neutral-100 px-8 py-4 font-medium text-black opacity-0 transition-all duration-300 xl:visible xl:static xl:h-auto xl:-translate-y-0 xl:opacity-100 ${open && "visible translate-y-0 select-auto opacity-100"}`,
            )}
          >
            <ul className="mt-20 flex flex-col space-y-4 text-lg font-medium uppercase leading-6 tracking-tight sm:leading-[100%] md:text-2xl md:leading-[1] xl:mt-0 xl:flex-row xl:justify-center xl:space-x-6 xl:space-y-0 xl:text-lg xl:normal-case">
              {navLinks.map(({ title, href }) => (
                <li
                  key={title}
                  className="transition hover:text-emerald-400"
                >
                  <a href={href}>{title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="z-[102] flex items-center space-x-2.5">
            <button className="w-full rounded-full bg-black px-4 py-3 leading-[1] text-white transition duration-200 hover:bg-emerald-400 hover:text-black">
              Login
            </button>
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className={cn(
                `animate-slide-left sm:!animate-none relative box-content block h-8 w-8 rounded-full bg-black px-2.5 py-1 leading-[1] transition-all duration-200 before:relative before:top-[4px] before:m-auto before:block before:h-[2px] before:w-[80%] before:bg-white before:content-[''] after:relative after:top-[-4px] after:m-auto after:block after:h-[2px] after:w-[80%] after:bg-white after:content-[''] xl:hidden ${open && "animate-slide-right sm:!animate-none before:top-[1px] before:rotate-[-45deg] after:top-[-1px] after:rotate-[45deg]"}`,
              )}
            ></button>
          </div>
        </div>
      </header>
    </section>
  );
};
export default Index;
