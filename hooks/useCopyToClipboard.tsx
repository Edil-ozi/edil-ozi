import reactElementToJSXString from "react-element-to-jsx-string";

const useCopyToClipboard = () => {
  const copy = (button: any) => {
    if (button.func) {
      button.func()
    }
    if (button.code) {
      copyToClipboard(button.code);
      return;
    }
    let buttonString = reactElementToJSXString(button.component);

    if (buttonString) {
      copyToClipboard(buttonString);
    }
  };
  function copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:");
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
      });
  }
  return { copy };
};

export default useCopyToClipboard;
