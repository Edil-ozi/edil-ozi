import BackgroundGrid from "@/registry/components/edil-ozi/background-grid";

const BackgroundGridDemo = () => {
  return (
    <section className="w-full z-10 h-[420px] bg-white dark:bg-black relative">
      <BackgroundGrid classes="text-red-400" />

      <div className="relative z-[100] flex h-full justify-center pt-36 ">
        <div className="max-w-[90%] items-center text-center font-medium lg:max-w-[75%]">
          <p className="text-xl leading-[1] lg:text-2xl">Now You See Me</p>
          <h1 className="mt-2.5 text-4xl font-black lg:text-5xl">Grids are Awesome!</h1>
        </div>
      </div>
    </section>
  );
};

export default BackgroundGridDemo;
