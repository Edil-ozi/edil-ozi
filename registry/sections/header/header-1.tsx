import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {}

const links = [
  { title: "Home", href: "#" },
  { title: "Team", href: "/sections/header" },
  { title: "About", href: "#" },
  { title: "Products", href: "#" },
  { title: "Contact", href: "#" },
];

const Index: FC<Props> = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-10 h-[420px] w-full overflow-hidden bg-stone-100 dark:bg-stone-300">
      <header className="flex w-full items-center justify-between bg-zinc-200 px-4 py-4 dark:bg-zinc-600 lg:px-6 xl:px-10 xl:py-6">
        <div className="text-sm md:text-base lg:mb-0">Logo</div>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="z-40 block lg:hidden"
        >
          {open ? (
            <svg
              focusable="false"
              className="fill-black dark:fill-white"
              width={24}
              height={24}
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          ) : (
            <svg
              focusable="false"
              className="fill-black dark:fill-white"
              width={24}
              height={24}
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
            </svg>
          )}
        </button>
        <nav
          className={`absolute right-0 top-0 z-30 mx-0 flex h-full w-[240px] flex-col items-center justify-start space-y-6 bg-zinc-300 py-10 text-lg transition-all duration-200 dark:bg-zinc-600 lg:relative lg:h-auto lg:w-auto lg:flex-row lg:justify-between lg:space-x-4 lg:space-y-0 lg:bg-transparent lg:py-0 lg:text-base xl:text-lg ${open ? "pointer-events-auto visible translate-x-[0%] select-auto opacity-100" : "pointer-events-none invisible translate-x-[100%] select-none opacity-0 lg:pointer-events-auto lg:visible lg:translate-x-[0%] lg:select-auto lg:opacity-100"}`}
        >
          <ul className="flex flex-col items-start gap-2 *:cursor-pointer lg:flex-row lg:items-center lg:space-x-6">
            {links.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className={`hover:text-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:hover:text-emerald-400 ${pathname === href && "text-emerald-600 dark:text-emerald-400"}`}
              >
                {title}
              </Link>
            ))}
          </ul>

          <button className="rounded-full bg-zinc-600/80 px-7 py-2 text-white hover:bg-zinc-600 dark:bg-zinc-800/80 dark:hover:bg-zinc-800">
            Sign In
          </button>
        </nav>
        <div
          onClick={() => setOpen(!open)}
          className={`${open ? "absolute" : "hidden"} left-0 top-0 z-20 h-full w-full dark:bg-black/50 lg:hidden`}
        ></div>
      </header>

      <p className="mt-6 text-center text-lg text-black/50">Responsive, mobile first navigation menu</p>
    </div>
  );
};
export default Index;
