// Replace the original SVGs from the HTML with <svg/> to declutter the demo html
export const concatenateSvgs = (html: string) => {
  const svgRegex = /<svg[\s\S]*?<\/svg>/gi;
  const svgs = html.match(svgRegex) || [];

  if (svgs.length === 0) {
    return html;
  }
  return html.replaceAll(svgRegex, '<svg />');
};
