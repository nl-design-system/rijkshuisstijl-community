import { remark } from 'remark';
import remarkNormalizeHeadings from 'remark-normalize-headings';

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
