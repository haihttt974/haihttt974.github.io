export const copyToClipboard = async (text: string) => {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through to the textarea fallback for browsers that expose the API but block it.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);

  const selection = document.getSelection();
  const previousRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

  textarea.focus();
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();

  if (previousRange && selection) {
    selection.removeAllRanges();
    selection.addRange(previousRange);
  }

  if (!copied) {
    throw new Error("Unable to copy to clipboard");
  }
};
