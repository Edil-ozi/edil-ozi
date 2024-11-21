import TwoWayParallax from "@/registry/components/edil-ozi/two-way-parallax";

const TwoWayParallaxDemo = () => {
  const images = [
    "https://images.unsplash.com/photo-1707403735393-fead5a15b6c1?q=40&w=640",
    "https://images.unsplash.com/photo-1533898608557-4b734723a75d?q=40&w=640",
    "https://images.unsplash.com/photo-1527249422714-53992d2f35b9?q=40&w=640",
    "https://images.unsplash.com/photo-1670941214028-c1210e9cd756?q=40&w=640",
    "https://images.unsplash.com/photo-1605031907073-19290740c3e4?q=40&w=640",
    "https://images.unsplash.com/photo-1573689705431-6a4746f64e04?q=40&w=640",

    "https://images.unsplash.com/photo-1546387742-699415b49340?q=40&w=640",
    "https://images.unsplash.com/photo-1609742046972-211e319fdb5b?q=40&w=640",
    "https://images.unsplash.com/photo-1690483880981-d0c8e06a9197?q=40&w=640",
    "https://images.unsplash.com/photo-1690483705837-41fb4c90b5f1?q=40&w=640",
    "https://images.unsplash.com/photo-1632389449668-ef6d10fe6648?q=40&w=640",
    "https://images.unsplash.com/photo-1661151488777-01eb94455b7a?q=40&w=640",
  ];
  return (
    <section className="w-full pb-[10vh]">
      <div className="pb-[30vh] text-center text-2xl font-medium">Scroll Down</div>
      <TwoWayParallax images={images} />
    </section>
  );
};

export default TwoWayParallaxDemo;
