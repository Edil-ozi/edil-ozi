import { ReactNode } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast } from "sonner";

type Button = {
  component: ReactNode;
  code?: string;
  message?: string;
  extraMessage?: string;
};

const useCopyToClipboard = () => {
  const copy = ({ component, code, message, extraMessage = "" }: Button) => {
    if (code) {
      copyToClipboard(code, message);
      return;
    }
    let buttonString = reactElementToJSXString(component);

    if (buttonString) {
      copyToClipboard(buttonString, message, extraMessage);
    }
  };
  async function copyToClipboard(text: string, message?: string, extraMessage?: string) {
    try {
      await navigator.clipboard.writeText(text + "\n" + extraMessage);
      toast.success(message || "Copied!");
    } catch (err) {
      console.log("Error copy", err);
    }
  }
  return { copy };
};

export default useCopyToClipboard;
