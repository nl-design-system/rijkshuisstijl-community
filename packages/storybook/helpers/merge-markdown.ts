import { remark } from 'remark';
import remarkNormalizeHeadings from 'remark-normalize-headings';

/**
 * Replaces all occurrences of the target string in the provided markdown text with the specified replacement string.
 * The target is replaced only when it appears as a whole word, ensuring it's not part of another word.
 *
 * The function uses a regular expression with word boundaries to match the target only when it is surrounded by spaces,
 * punctuation, or at the start/end of the string. The replacement is case-insensitive and global, meaning it will replace
 * all instances of the target in the text.
 *
 * Use cases:
 * - Replaces specific words or phrases in markdown text without affecting words that contain the target string.
 * - Ensures case-insensitive and global replacements across the entire markdown text.
 */

export const replaceMarkdown = (
  markdown: string,
  target: string,
  replacement: string,
  caseSensitive: boolean = false,
): string => {
  const regex = new RegExp(`(?<=^|[\\s\\p{P}])${target}(?=[\\s\\p{P}]|$)`, `g${caseSensitive ? 'i' : ''}u`);
  return markdown.replace(regex, replacement);
};

/**
 * Merges an array of markdown strings into a single string and normalizes the headings.
 *
 * The function joins the markdown array into a single string, using double newlines (`\n\n`) as separators between the elements.
 *
 * Use cases:
 * - Combines multiple markdown sections or chunks into one document.
 * - Normalizes headings in the merged markdown to maintain consistency in header formatting.
 */

export const mergeMarkdown = (markdown: string[]) =>
  String(remark().use(remarkNormalizeHeadings).processSync(markdown.join('\n\n')));
