import { describe, expect, it } from 'vitest';
import { mergeMarkdown } from '.';

describe('mergeMarkdown', () => {
  describe('concatination', () => {
    it('should concatinate two pieces of markdown', () => {
      const a = 'This is some **markdown**';
      const b = 'This is some *other* markdown';
      const document = mergeMarkdown([a, b]);

      expect(document).toBe('This is some **markdown**\n\nThis is some *other* markdown\n');
    });

    it('should handle empty values', () => {
      const a = 'This is some **markdown**';
      const b = '';
      const c = 'This is some *other* markdown';
      const document = mergeMarkdown([a, b, c]);

      expect(document).toBe('This is some **markdown**\n\nThis is some *other* markdown\n');
    });

    it('should handle only empty values', () => {
      const a = '';
      const b = '';
      const c = '';
      const document = mergeMarkdown([a, b, c]);

      expect(document).toBe('');
    });
  });

  describe('heading normalization', () => {
    it(`should normalize the headings in the final document`, () => {
      const a = `# Pluto`;
      const b = `# History\n\n## Discovery`;
      const c = `# Orbit`;
      const expectedResult = `# Pluto\n\n## History\n\n### Discovery\n\n## Orbit\n`;

      const document = mergeMarkdown([a, b, c]);

      expect(document).toBe(expectedResult);
    });
  });
});
