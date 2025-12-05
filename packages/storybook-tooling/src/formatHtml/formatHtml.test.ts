import { describe, expect, it } from 'vitest';
import { formatHtml } from '.';

describe('formatHtml', () => {
  it('should format a simple HTML string with proper indentation', () => {
    const input = '<div><p>Hello</p></div>';
    const expected = '<div>\n  <p>\n    Hello\n  </p>\n</div>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle nested HTML elements', () => {
    const input = '<div><section><p>Nested content</p></section></div>';
    const expected = '<div>\n  <section>\n    <p>\n      Nested content\n    </p>\n  </section>\n</div>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle self-closing tags', () => {
    const input = '<div><img src="test.jpg"/><br/></div>';
    const expected = '<div>\n  <img src="test.jpg"/>\n  <br/>\n</div>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle HTML with attributes', () => {
    const input = '<div class="container"><p id="text">Content</p></div>';
    const expected = '<div class="container">\n  <p id="text">\n    Content\n  </p>\n</div>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should remove extra whitespace between tags', () => {
    const input = '<div>   <p>   Text   </p>   </div>';
    const expected = '<div>\n  <p>\n    Text\n  </p>\n</div>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle HTML with newlines and extra spaces', () => {
    const input = '<div>\n  <p>\n    Text\n  </p>\n</div>';
    const expected = '<div>\n  <p>\n    Text\n  </p>\n</div>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle multiple sibling elements', () => {
    const input = '<div><p>First</p><p>Second</p><p>Third</p></div>';
    const expected = '<div>\n  <p>\n    First\n  </p>\n  <p>\n    Second\n  </p>\n  <p>\n    Third\n  </p>\n</div>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle empty tags', () => {
    const input = '<div><p></p></div>';
    const expected = '<div>\n  <p>\n  </p>\n</div>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle deeply nested structures', () => {
    const input = '<div><ul><li><a href="#">Link</a></li></ul></div>';
    const expected =
      '<div>\n  <ul>\n    <li>\n      <a href="#">\n        Link\n      </a>\n    </li>\n  </ul>\n</div>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle mixed content with text and tags', () => {
    const input = '<div><p>Start<strong>bold</strong>end</p></div>';
    const expected = '<div>\n  <p>\n    Start\n    <strong>\n      bold\n    </strong>\n    end\n  </p>\n</div>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should trim whitespace from text content', () => {
    const input = '<p>   Trimmed text   </p>';
    const expected = '<p>\n  Trimmed text\n</p>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle HTML with special characters in attributes', () => {
    const input = '<a href="https://example.com?param=value&other=test">Link</a>';
    const expected = '<a href="https://example.com?param=value&other=test">\n  Link\n</a>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle single tag', () => {
    const input = '<p>Text</p>';
    const expected = '<p>\n  Text\n</p>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle only self-closing tag', () => {
    const input = '<img src="test.jpg"/>';
    const expected = '<img src="test.jpg"/>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle complex real-world HTML structure', () => {
    const input =
      '<article><header><h1>Title</h1></header><section><p>Paragraph</p></section><footer><small>Footer</small></footer></article>';
    const expected =
      '<article>\n  <header>\n    <h1>\n      Title\n    </h1>\n  </header>\n  <section>\n    <p>\n      Paragraph\n    </p>\n  </section>\n  <footer>\n    <small>\n      Footer\n    </small>\n  </footer>\n</article>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should use two spaces for indentation', () => {
    const input = '<div><p>Test</p></div>';
    const result = formatHtml(input);
    const lines = result.split('\n');
    // Second line should start with 2 spaces
    expect(lines[1]).toMatch(/^ {2}</);
    // Third line should start with 4 spaces
    expect(lines[2]).toMatch(/^ {4}/);
  });

  it('should handle malformed HTML with extra closing tags gracefully', () => {
    // Malformed HTML with extra closing tags should not throw
    const input = '</div><div><p>Test</p></div>';
    const result = formatHtml(input);
    // Should not throw and should handle gracefully with zero indentation for malformed parts
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
    expect(result).toContain('<div>');
    expect(result).toContain('Test');
  });

  it('should handle empty string input', () => {
    const input = '';
    const expected = '';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle whitespace-only input', () => {
    const input = '   \n  \n  ';
    const expected = '';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle tags with data attributes', () => {
    const input = '<div data-test="value" data-id="123"><p>Content</p></div>';
    const expected = '<div data-test="value" data-id="123">\n  <p>\n    Content\n  </p>\n</div>\n';
    expect(formatHtml(input)).toBe(expected);
  });

  it('should handle multiple classes in class attribute', () => {
    const input = '<div class="container fluid primary"><p>Text</p></div>';
    const expected = '<div class="container fluid primary">\n  <p>\n    Text\n  </p>\n</div>\n';
    expect(formatHtml(input)).toBe(expected);
  });
});
