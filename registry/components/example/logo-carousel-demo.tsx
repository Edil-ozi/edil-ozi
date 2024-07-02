import LogoCarousel from "@/registry/components/edil-ozi/logo-carousel";

const carouselItems = [
  { text: 'NEXTJS', classes: 'bg-slate-500' },
  { text: 'NUXTJS', classes: 'bg-stone-500' },
  { text: 'ASTRO', classes: 'bg-zinc-500' },
  { text: 'SOLID', classes: 'bg-slate-600' },
  { text: 'QWIK', classes: 'bg-stone-600' },
  { text: 'SVELTE', classes: 'bg-zinc-600' },


]

const LogoCarouselDemo = () => {
  return (
    <div className="w-full py-10">
      <LogoCarousel items={carouselItems} />
    </div>
  );
};

export default LogoCarouselDemo;
