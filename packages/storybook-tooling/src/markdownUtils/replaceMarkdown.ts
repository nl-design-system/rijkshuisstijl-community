/**
 * Replaces all occurrences of the target string in the provided markdown text with the specified replacement string.
 * The target is replaced only when it appears as a whole word, ensuring it's not part of another word.
 *
 * The function uses a regular expression with word boundaries to match the target only when it is surrounded by spaces,
 * punctuation (including hyphens, underscores, and backticks), or at the start/end of the string. The replacement is
 * case-insensitive by default and global, meaning it will replace all instances of the target in the text.
 *
 * Use cases:
 * - Replaces specific words or phrases in markdown text without affecting words that contain the target string.
 * - Handles hyphenated and underscored words (e.g., 'test' in 'test-case', 'test_case', or 'some-test').
 * - Handles words in backticks (e.g., 'test' in '`test`').
 * - Ensures case-insensitive (by default) and global replacements across the entire markdown text.
 */

export const replaceMarkdown = (
  markdown: string,
  target: string,
  replacement: string,
  caseSensitive: boolean = false,
): string => {
  // Include backticks explicitly since they need to be escaped in template literals
  const regex = new RegExp(`(?<=^|[\\s\\p{P}_\\-\`])${target}(?=[\\s\\p{P}_\\-\`]|$)`, `g${caseSensitive ? '' : 'i'}u`);
  return markdown.replace(regex, replacement);
};
