import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { title: "Home", href: "#" },
  { title: "Team", href: "#" },
  { title: "About", href: "#" },
  { title: "Products", href: "#" },
  { title: "Contact", href: "#" },
];

const Index = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative z-10 h-[800px] w-full bg-blue-600">
      <header className="flex h-20 w-full items-center justify-between px-4 lg:px-6 xl:px-10">
        <div className="z-40 mb-4 text-sm text-white md:text-base lg:mb-0">Logo</div>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="z-[103] block lg:hidden"
        >
          {open ? (
            <svg
              focusable="false"
              className="fill-white"
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
              className="fill-white"
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
          className={`absolute right-0 top-0 z-[102] mx-0 flex h-full w-[240px] flex-col items-center justify-start space-y-6 bg-neutral-950 py-10 text-lg text-white transition-all duration-200 lg:relative lg:h-auto lg:w-auto lg:flex-row lg:justify-between lg:space-x-4 lg:space-y-0 lg:bg-transparent lg:py-0 lg:text-base xl:text-lg ${open ? "pointer-events-auto visible translate-x-[0%] select-auto opacity-100" : "pointer-events-none invisible translate-x-[100%] select-none opacity-0 lg:pointer-events-auto lg:visible lg:translate-x-[0%] lg:select-auto lg:opacity-100"}`}
        >
          <ul className="flex flex-col items-start gap-2 *:cursor-pointer lg:flex-row lg:items-center lg:space-x-6">
            {links.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className={`hover:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-600`}
              >
                {title}
              </Link>
            ))}
          </ul>
        </nav>
        <div
          onClick={() => setOpen(!open)}
          className={`${open ? "absolute" : "hidden"} left-0 top-0 z-[101] h-full w-full dark:bg-black/50 lg:hidden`}
        ></div>
      </header>

      <Image
        src="https://images.unsplash.com/photo-1534104646695-370d0e9abfa0?q=80"
        className="object-cover object-top"
        fill={true}
        objectFit="cover"
        alt="mountains view"
      />
      <div className="absolute left-0 top-0 z-20 h-full w-full bg-gradient-to-b from-black/90 to-black/60"></div>

      <div className="relative z-[100] flex h-full justify-center pt-48 text-white">
        <div className="max-w-[90%] items-center text-center font-medium lg:max-w-[75%]">
          <p className="text-xl leading-[1] lg:text-2xl">The Balance of Life</p>
          <h1 className="my-2.5 text-4xl font-black lg:my-4 lg:text-5xl">Cooperation in Wildlife</h1>
          <p className="mt-2.5 text-balance text-base leading-[150%] lg:text-xl">
            Focusing on sustainable land management practices that promote positive-sum outcomes by balancing the needs
            of humans, wildlife, and the environment.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Index;
