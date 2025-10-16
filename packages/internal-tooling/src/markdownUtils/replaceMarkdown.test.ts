import { describe, expect, it } from 'vitest';
import { replaceMarkdown } from '.';

describe('replaceMarkdown', () => {
  describe('basic word replacement', () => {
    it('should replace a single word with spaces around it', () => {
      const input = 'This is a test string';
      const result = replaceMarkdown(input, 'test', 'example');
      expect(result).toBe('This is a example string');
    });

    it('should replace multiple occurrences of the target word', () => {
      const input = 'test one and test two and test three';
      const result = replaceMarkdown(input, 'test', 'item');
      expect(result).toBe('item one and item two and item three');
    });

    it('should replace word at the start of the string', () => {
      const input = 'test is the first word';
      const result = replaceMarkdown(input, 'test', 'example');
      expect(result).toBe('example is the first word');
    });

    it('should replace word at the end of the string', () => {
      const input = 'This is a test';
      const result = replaceMarkdown(input, 'test', 'example');
      expect(result).toBe('This is a example');
    });

    it('should not replace when target is part of a larger word', () => {
      const input = 'testing tested tester';
      const result = replaceMarkdown(input, 'test', 'example');
      expect(result).toBe('testing tested tester');
    });
  });

  describe('punctuation words', () => {
    it('should replace word followed by a hyphen', () => {
      const input = 'This is a test-case example';
      const result = replaceMarkdown(input, 'test', 'sample');
      expect(result).toBe('This is a sample-case example');
    });

    it('should replace word preceded by a hyphen', () => {
      const input = 'This is a some-test example';
      const result = replaceMarkdown(input, 'test', 'sample');
      expect(result).toBe('This is a some-sample example');
    });

    it('should replace word surrounded by hyphens', () => {
      const input = 'This is a some-test-case example';
      const result = replaceMarkdown(input, 'test', 'sample');
      expect(result).toBe('This is a some-sample-case example');
    });

    it('should replace multiple hyphenated occurrences', () => {
      const input = 'test-one and test-two';
      const result = replaceMarkdown(input, 'test', 'item');
      expect(result).toBe('item-one and item-two');
    });

    it('should replace word followed by period', () => {
      const input = 'This is a test.';
      const result = replaceMarkdown(input, 'test', 'example');
      expect(result).toBe('This is a example.');
    });

    it('should replace word followed by comma', () => {
      const input = 'This is a test, right?';
      const result = replaceMarkdown(input, 'test', 'example');
      expect(result).toBe('This is a example, right?');
    });

    it('should replace word in parentheses', () => {
      const input = 'This is a (test) example';
      const result = replaceMarkdown(input, 'test', 'sample');
      expect(result).toBe('This is a (sample) example');
    });

    it('should replace word followed by question mark', () => {
      const input = 'Is this a test?';
      const result = replaceMarkdown(input, 'test', 'example');
      expect(result).toBe('Is this a example?');
    });

    it('should replace word followed by exclamation mark', () => {
      const input = 'This is a test!';
      const result = replaceMarkdown(input, 'test', 'example');
      expect(result).toBe('This is a example!');
    });

    it('should replace word in quotes', () => {
      const input = 'This is a "test" example';
      const result = replaceMarkdown(input, 'test', 'sample');
      expect(result).toBe('This is a "sample" example');
    });
  });

  describe('case sensitivity', () => {
    it('should replace case-insensitively by default', () => {
      const input = 'Test TEST test TeSt';
      const result = replaceMarkdown(input, 'test', 'example');
      expect(result).toBe('example example example example');
    });

    it('should replace only exact case when caseSensitive is true', () => {
      const input = 'Test TEST test TeSt';
      const result = replaceMarkdown(input, 'test', 'example', true);
      expect(result).toBe('Test TEST example TeSt');
    });

    it('should handle mixed case target with case-insensitive mode', () => {
      const input = 'This is a Test and a test';
      const result = replaceMarkdown(input, 'Test', 'example');
      expect(result).toBe('This is a example and a example');
    });

    it('should handle mixed case target with case-sensitive mode', () => {
      const input = 'This is a Test and a test';
      const result = replaceMarkdown(input, 'Test', 'example', true);
      expect(result).toBe('This is a example and a test');
    });
  });

  describe('markdown-specific cases', () => {
    it('should replace in markdown headers', () => {
      const input = '# This is a test header\n\nSome content.';
      const result = replaceMarkdown(input, 'test', 'sample');
      expect(result).toBe('# This is a sample header\n\nSome content.');
    });

    it('should replace in markdown lists', () => {
      const input = '- test item one\n- test item two';
      const result = replaceMarkdown(input, 'test', 'sample');
      expect(result).toBe('- sample item one\n- sample item two');
    });

    it('should replace in markdown bold', () => {
      const input = 'This is **test** content';
      const result = replaceMarkdown(input, 'test', 'sample');
      expect(result).toBe('This is **sample** content');
    });

    it('should replace in markdown italic', () => {
      const input = 'This is *test* content';
      const result = replaceMarkdown(input, 'test', 'sample');
      expect(result).toBe('This is *sample* content');
    });

    it('should replace in markdown code blocks', () => {
      const input = 'This is `test` inline code';
      const result = replaceMarkdown(input, 'test', 'sample');
      expect(result).toBe('This is `sample` inline code');
    });

    it('should replace in markdown links', () => {
      const input = '[test link](https://example.com)';
      const result = replaceMarkdown(input, 'test', 'sample');
      expect(result).toBe('[sample link](https://example.com)');
    });
  });

  describe('edge cases', () => {
    it('should handle empty string', () => {
      const input = '';
      const result = replaceMarkdown(input, 'test', 'example');
      expect(result).toBe('');
    });

    it('should handle target not found', () => {
      const input = 'This is a sample string';
      const result = replaceMarkdown(input, 'test', 'example');
      expect(result).toBe('This is a sample string');
    });

    it('should handle empty target (should not throw)', () => {
      const input = 'This is a test';
      // Empty target creates invalid regex, but shouldn't crash
      expect(() => replaceMarkdown(input, '', 'example')).not.toThrow();
    });

    it('should handle multiline text', () => {
      const input = 'Line one with test\nLine two with test\nLine three';
      const result = replaceMarkdown(input, 'test', 'sample');
      expect(result).toBe('Line one with sample\nLine two with sample\nLine three');
    });

    it('should handle unicode characters', () => {
      const input = 'This is a test café';
      const result = replaceMarkdown(input, 'test', 'sample');
      expect(result).toBe('This is a sample café');
    });

    it('should handle special regex characters in replacement', () => {
      const input = 'This is a test';
      const result = replaceMarkdown(input, 'test', '$1 special');
      expect(result).toBe('This is a $1 special');
    });
  });
});
