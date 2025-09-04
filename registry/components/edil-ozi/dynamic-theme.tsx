import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// optional hook for smooth scrolling
import useLenis from "@/hooks/useLenis";

export const NAV_LINKS = [
  { id: "home", linkIdx: 0, isDarkBg: false, start: "", end: "" },
  { id: "services", linkIdx: 1, isDarkBg: true, start: "", end: "" },
  { id: "works", linkIdx: 2, isDarkBg: false, start: "", end: "" },
  { id: "about", linkIdx: 3, isDarkBg: true, start: "", end: "" },
  { id: "contact", linkIdx: 4, isDarkBg: false, start: "", end: "" },
];

const DynamicTheme = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);

  // for smooth scrolling when link were pressed
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (!mainRef?.current) return;

      const navItems = mainRef?.current?.querySelectorAll(".nav_link");

      // Create ScrollTrigger for each section
      NAV_LINKS.forEach(({ id, linkIdx, isDarkBg, start, end }) => {
        ScrollTrigger.create({
          trigger: "#" + id,
          start: start || "top top",
          end: end || "bottom top",
          onEnter: () => setActiveLink(linkIdx, isDarkBg),
          onEnterBack: () => setActiveLink(linkIdx, isDarkBg),
        });
      });

      // Function to update active link style
      const setActiveLink = (linkIdx: number, isDark: boolean) => {
        navItems.forEach((item, i) => {
          if (i === linkIdx) {
            gsap.to(item, {
              color: isDark ? "#fff" : "#000",
              fontWeight: 500,
              duration: 0.08,
            });
          } else {
            gsap.to(item, {
              color: isDark ? "#fff5" : "#0007",
              fontWeight: 400,
              duration: 0.08,
            });
          }
        });
      };

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: mainRef.current!, dependencies: [] },
  );

  //Optional for smooth scrolling
  useLenis();

  return (
    <section
      className="relative w-full bg-white"
      ref={mainRef}
    >
      <span className="absolute left-0 top-0 z-[10100] mx-auto flex h-12 w-full items-center text-center text-black">
        <p className="mx-auto w-[70%] text-balance text-sm font-medium tracking-wide opacity-60">
          This is demo area , please remove the additional styles from NAV element.
        </p>
      </span>
      {/* from <nav/> element - remove pt-[56px] and change h-32 to h-16  */}
      <nav
        ref={navRef}
        className="sticky top-0 z-[1000] flex h-32 w-full items-center pt-[56px] text-sm shadow-sm lg:text-lg"
      >
        <ul className="flex h-full flex-1 items-center justify-end space-x-4 px-6 text-black">
          {NAV_LINKS.map(({ id }) => (
            <li
              className="nav_link inline-block cursor-pointer capitalize transition"
              aria-label="link-button"
              role="button"
              tabIndex={0}
              onClick={() => smoothScroll(id)}
              key={id}
            >
              <p>{id}</p>
            </li>
          ))}
        </ul>
      </nav>

      <section
        id="home"
        className="flex h-[480px] w-full flex-col items-center justify-center bg-slate-100 text-4xl uppercase text-black text-opacity-80"
      >
        home section <br />
        <span className="mt-2 text-xs font-bold lowercase tracking-wider opacity-40">(scroll down to see effect)</span>
      </section>

      <section
        id="services"
        className="text-slate-bg-slate-100 flex h-[480px] w-full items-center justify-center bg-slate-950 text-4xl uppercase text-opacity-80"
      >
        services section
      </section>

      <section
        id="works"
        className="flex h-[480px] w-full items-center justify-center bg-slate-100 text-4xl uppercase text-black text-opacity-80"
      >
        works section
      </section>

      <section
        id="about"
        className="text-slate-bg-slate-100 flex h-[480px] w-full items-center justify-center bg-slate-950 text-4xl uppercase text-opacity-80"
      >
        about section
      </section>

      <section
        id="contact"
        className="flex h-[480px] w-full items-center justify-center bg-slate-100 text-4xl uppercase text-black text-opacity-80"
      >
        contact section
      </section>
    </section>
  );
};
export default DynamicTheme;
