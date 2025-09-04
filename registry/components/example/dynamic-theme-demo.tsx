import { FC } from "react";
import DynamicTheme from "@/registry/components/edil-ozi/dynamic-theme";

interface Props {}

const DynamicThemeDemo: FC<Props> = () => {
  return (
    <div className="mx-auto w-full max-w-[960px]">
      <DynamicTheme />
    </div>
  );
};
export default DynamicThemeDemo;
