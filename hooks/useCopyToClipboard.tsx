import { ReactNode } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast } from "sonner";

type Button = {
  component: ReactNode;
  code?: string;
  message?: string;
  extra?: string;
};

const useCopyToClipboard = () => {
  const copy = ({ component, code, message, extra }: Button) => {
    if (code) {
      copyToClipboard(code, message);
      return;
    }
    let buttonString = reactElementToJSXString(component);

    if (buttonString) {
      copyToClipboard(buttonString, message, extra);
    }
  };
  async function copyToClipboard(text: string, message?: string, extra?: string) {
    try {
      await navigator.clipboard.writeText(text + "\n" + extra);
      if (message) {
        toast.success(message);
      }
    } catch (err) {
      console.log("Error copy", err);
    }
  }
  return { copy };
};

export default useCopyToClipboard;
