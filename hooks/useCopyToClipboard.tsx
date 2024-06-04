import reactElementToJSXString from "react-element-to-jsx-string";

const useCopyToClipboard = () => {
  const copy = (button: any) => {
    if (button.code) {
      copyToClipboard(button.code);
      return;
    }
    let buttonString = reactElementToJSXString(button.component);

    if (buttonString) {
      const textToCopy = buttonString;
      copyToClipboard(textToCopy);
    }
  };
  function copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
      });
  }
  return { copy };
};

export default useCopyToClipboard;
