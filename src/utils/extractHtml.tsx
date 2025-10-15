import DOMPurify from "dompurify";

// Add labels before each link
function parseResponseWithLinks(text: string) {
  // Replace <a ...> with a label + <a ...>
  const labeledText = text.replace(
    /<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/gi,
    (_match, href, linkText) => {
      let label = "";

      // Determine label based on href
      if (href.startsWith("mailto:")) label = "Email: ";
      else if (href.includes("wa.me")) label = "WhatsApp: ";
      else label = "Link: ";

      // Return labeled <a> tag with <br> before it
      return `<br>${label}<a href="${href}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
    }
  );

  // Sanitize, allow only <a> and <br>
  const cleanHTML = DOMPurify.sanitize(labeledText, {
    ALLOWED_TAGS: ["a", "br"],
    ALLOWED_ATTR: ["href", "target", "rel"],
  });

  return { __html: cleanHTML };
}

export const Message = (text: string) => {
  return <p dangerouslySetInnerHTML={parseResponseWithLinks(text)} />;
};

export const containsHTML = (str: string): boolean => {
  return /<\/?[a-z][\s\S]*>/i.test(str);
};
