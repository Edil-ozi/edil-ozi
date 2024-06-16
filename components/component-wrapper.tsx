import { cn } from "@/lib/utils";

interface ComponentWrapperProps {
  className?: string;
  children: any;
}
const ComponentWrapper = ({ className, children }: ComponentWrapperProps) => {
  return (
    <div
      className={cn(
        "not-prose max-w-screen relative box-border flex flex-col items-center justify-center rounded-xl bg-background p-4 md:border md:p-8",
        className,
      )}
    >
      <div
        className={cn(
          `absolute inset-0 box-content h-full w-full`,
          `bg-[radial-gradient(#00000055_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]`,
          "lab-bg [background-size:16px_16px]",
        )}
      />
      {children}
    </div>
  );
};

export default ComponentWrapper;
