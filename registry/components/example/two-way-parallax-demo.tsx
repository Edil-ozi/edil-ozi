import TwoWayParallax from "@/registry/components/edil-ozi/two-way-parallax";

const TwoWayParallaxDemo = () => {
  const images = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=40&w=640",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=40&w=640",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=40&w=640",
    "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=640",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=640",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=640",

    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=40&w=640",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=40&w=640",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=40&w=640",
    "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=640",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=640",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=640",
  ];
  return (
    <section className="w-full pb-[10vh]">
      <div className="pb-[30vh] text-center text-2xl font-medium">Scroll Down</div>
      <TwoWayParallax images={images} />
    </section>
  );
};

export default TwoWayParallaxDemo;
