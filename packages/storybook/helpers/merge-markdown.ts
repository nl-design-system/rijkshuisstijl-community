import { remark } from 'remark';
import remarkNormalizeHeadings from 'remark-normalize-headings';

export const replaceMarkdown = (markdown: string, target: string, replacement: string): string => {
  const regex = new RegExp(`(?<=^|[\\s\\p{P}])${target}(?=[\\s\\p{P}]|$)`, 'giu');
  return markdown.replace(regex, replacement);
};

export const mergeMarkdown = (markdown: string[]) =>
  String(remark().use(remarkNormalizeHeadings).processSync(markdown.join('\n\n')));
