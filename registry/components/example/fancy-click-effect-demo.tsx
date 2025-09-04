import FancyClickEffect from "@/registry/components/edil-ozi/fancy-click-effect";

const FancyClickEffectDemo = () => {
  return (
    <div className="z-10 flex h-[420px] w-full items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <FancyClickEffect>
        <div className="aspect-video w-full max-w-80 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=60&w=800"
            alt="background image"
          />
          <div className="px-3 py-1.5">
            <h4 className="text-base">Click me.</h4>
            <h5 className="text-sm opacity-80">Click me too.</h5>
            <h6 className="text-xs opacity-70">Click me too too.</h6>
          </div>
        </div>
      </FancyClickEffect>
    </div>
  );
};
export default FancyClickEffectDemo;
