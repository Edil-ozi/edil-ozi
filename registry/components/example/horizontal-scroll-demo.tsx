import HorizontalScrollCarousel from "@/registry/components/edil-ozi/horizontal-scroll";

const HorizontalScrollDemo = () => {

  const images = [
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070",
    "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=2070",
    "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?q=80&w=2070",
    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?q=80&w=2070",
    "https://images.unsplash.com/photo-1572099606223-6e29045d7de3?q=80&w=2070",
  ];
  return (
    <div className="relative w-full bg-gray-400 dark:bg-gray-700">
      <div className="h-48"></div>
      <HorizontalScrollCarousel images={images} />
      <div className="h-48"></div>
    </div>
  );
};

export default HorizontalScrollDemo