"use client";
import InView from "@/registry/components/edil-ozi/in-view";

const InViewDemo1 = () => {
  return (
    <div className="relative z-10 h-[600px] w-full overflow-auto bg-zinc-100 pb-64 dark:bg-zinc-900">
      <div className="py-6 text-center text-base font-medium">Scroll down</div>
      <div className="flex h-[1000px] items-end justify-center px-4">
        <InView
          variants={{
            hidden: {
              opacity: 0,
              x: 160,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -350px 0px" }}
        >
          <div className="max-w-2xl bg-gray-100 p-4">
            <p className="text-xl text-gray-600">
              <strong>Design:</strong> in its essence, is the art of communication. It speaks volumes through visuals,
              layouts, and typography, creating a symphony of messages that captivate and engage audiences. Among the
              myriad elements that contribute to the beauty of design, none is perhaps as impactful as the thoughtful
              combination of text and headings. This article delves into the nuances of selecting and implementing fonts
              for headings, offering insights into how to elevate your design projects through typography.
            </p>
          </div>
        </InView>
      </div>
    </div>
  );
};

export default InViewDemo1;
