// Replace the original SVGs from the HTML with <svg/> to declutter the demo html
export const collapseSvgs = (html: string) => {
  const svgRegex = /<svg.*?<\/svg>/gi;
  return html.replaceAll(svgRegex, '<svg />');
};
