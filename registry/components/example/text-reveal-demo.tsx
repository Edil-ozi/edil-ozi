import TextReveal from "@/registry/components/edil-ozi/text-reveal";

const InfiniteTextDemo = () => {
  const paragraph = "Edil ozi will change the way you design.";

  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg border bg-white dark:bg-black">
      <TextReveal paragraph={paragraph} />
    </div>
  );
}

export default InfiniteTextDemo