import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// optional hook for smooth scrolling
import useLenis from '@/hooks/useLenis';

export const NAV_LINKS = [
  { id: "home", linkIdx: 0, isDarkBg: false, start: "", end: "" },
  { id: "services", linkIdx: 1, isDarkBg: true, start: "", end: "" },
  { id: "works", linkIdx: 2, isDarkBg: false, start: "", end: "" },
  { id: "about", linkIdx: 3, isDarkBg: true, start: "", end: "" },
  { id: "contact", linkIdx: 4, isDarkBg: false, start: "", end: "" },
];

const DynamicTheme = () => {

  const navRef = useRef<HTMLDivElement | null>(null)
  const mainRef = useRef<HTMLElement | null>(null)

  // for smooth scrolling when link were pressed
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!mainRef?.current) return;

    const navItems = mainRef?.current?.querySelectorAll('.nav_link')

    // Create ScrollTrigger for each section
    NAV_LINKS.forEach(({ id, linkIdx, isDarkBg, start, end }) => {

      ScrollTrigger.create({
        trigger: '#' + id,
        start: start || 'top top',
        end: end || 'bottom top',
        onEnter: () => setActiveLink(linkIdx, isDarkBg),
        onEnterBack: () => setActiveLink(linkIdx, isDarkBg),
      });
    });

    // Function to update active link style
    const setActiveLink = (linkIdx: number, isDark: boolean) => {
      navItems.forEach((item, i) => {

        if (i === linkIdx) {
          gsap.to(item, {
            color: isDark ? '#fff' : '#000',
            fontWeight: 500,
            duration: 0.08,
          });
        } else {
          gsap.to(item, {
            color: isDark ? '#fff5' : "#0007",
            fontWeight: 400,
            duration: 0.08,

          });
        }
      });
    };

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, {scope:mainRef.current!, dependencies: []});

  //Optional for smooth scrolling
  useLenis()
  
  return (
    <section className="w-full relative bg-white" ref={mainRef}>
      <span className='absolute top-0 left-0 text-black w-full h-12 flex items-center mx-auto text-center z-[10100]'>
        <p className='w-[70%] mx-auto text-balance text-sm font-medium tracking-wide opacity-60'>This is demo area , please remove the additional styles from NAV element.</p>
      </span>
      {/* from <nav/> element - remove pt-[56px] and change h-32 to h-16  */}
      <nav ref={navRef} className="flex h-32 pt-[56px] items-center text-sm lg:text-lg top-0 w-full z-[1000] shadow-sm sticky">
        <ul className="flex flex-1 justify-end items-center h-full text-black space-x-4 px-6">
          {NAV_LINKS.map(({ id }) => (
            <li
            className="nav_link capitalize cursor-pointer transition inline-block"
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

      <section id="home" className='w-full h-[480px] flex flex-col items-center justify-center text-4xl uppercase text-opacity-80 bg-slate-100 text-black'>
        home section <br />

        <span className='text-xs font-bold tracking-wider opacity-40 mt-2 lowercase'>(scroll down to see effect)</span>
      </section>

      <section id="services" className='w-full h-[480px] flex items-center justify-center text-4xl uppercase text-opacity-80 text-slate-bg-slate-100 bg-slate-950'>
        services section
      </section>

      <section id="works" className='w-full h-[480px] flex items-center justify-center text-4xl uppercase text-opacity-80 bg-slate-100 text-black'>
        works section
      </section>

      <section id="about" className='w-full h-[480px] flex items-center justify-center text-4xl uppercase text-opacity-80 text-slate-bg-slate-100 bg-slate-950'>
        about section
      </section>

      <section id="contact" className='w-full h-[480px] flex items-center justify-center text-4xl uppercase text-opacity-80 bg-slate-100 text-black'>
        contact section
      </section>
    </section>
  )
};
export default DynamicTheme
