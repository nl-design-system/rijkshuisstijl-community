export const formatHtml = (html: string) => {
  // Remove existing newlines and extra spaces between tags
  const singleLineHtml = html.replace(/>\s+</g, '><').trim();

  // Split the HTML into an array of tags and text content
  const tokens = singleLineHtml.split(/(<[^>]*>)/).filter(Boolean);

  let formattedHtml = '';
  let indentLevel = 0;
  const indent = '  '; // Two spaces for indentation

  for (const element of tokens) {
    const token = element;
    const isTag = token.startsWith('<') && token.endsWith('>');

    if (!isTag) {
      // For text content, just add it with the current indentation
      if (token.trim()) {
        // Prevent indentLevel from going below zero
        const safeIndentLevel = Math.max(0, indentLevel);
        formattedHtml += indent.repeat(safeIndentLevel) + token.trim() + '\n';
      }
      continue;
    }

    const isClosingTag = token.startsWith('</');
    const isSelfClosingTag = token.endsWith('/>');

    // For closing tags, decrease indent level before adding the line
    if (isClosingTag) {
      indentLevel--;
    }

    // Prevent indentLevel from going below zero before using it
    const safeIndentLevel = Math.max(0, indentLevel);

    // Add the indented line
    formattedHtml += indent.repeat(safeIndentLevel) + token + '\n';

    // For opening tags (that are not self-closing), increase indent level
    if (!isClosingTag && !isSelfClosingTag) {
      indentLevel++;
    }
  }

  return formattedHtml;
};
