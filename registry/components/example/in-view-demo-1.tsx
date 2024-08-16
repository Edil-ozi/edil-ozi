"use client";
import InView from "@/registry/components/edil-ozi/in-view";

const InViewDemo1 = () => {
  return (
    <div className="relative z-10 h-[600px] w-full overflow-auto bg-zinc-100 pb-64 dark:bg-zinc-900">
      <div className="py-6 text-center text-base font-medium">Scroll down</div>
      <div className="flex h-[1000px] items-end justify-center px-4">
        <InView
          variants={{
            hidden: { opacity: 0, y: 150, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -320px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div>
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-gray-200 md:text-3xl xl:text-4xl">
              Crafting Digital Experiences
            </h1>
            <p className="text-balance text-center text-lg leading-[1.5] text-gray-900 dark:text-gray-300 md:text-xl xl:text-2xl">
              Web development is a symphony of creativity and logic, crafting digital experiences that resonate with
              users. It's about turning visions into reality, blending design aesthetics with functional prowess. From
              the elegance of front-end interfaces to the robustness of back-end systems, web development is a testament
              to human ingenuity, connecting people across the globe through seamless interactions.
            </p>
          </div>
        </InView>
      </div>
    </div>
  );
};

export default InViewDemo1;
