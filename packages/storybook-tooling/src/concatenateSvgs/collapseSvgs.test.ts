import { describe, expect, it } from 'vitest';
import { collapseSvgs } from './collapseSvgs';

describe('collapseSvgs', () => {
  it('should extract SVG content and replace the original tags with <svg />', () => {
    const html = '<div><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" /></svg></div>';
    const result = collapseSvgs(html);

    expect(result).toContain('<div><svg /></div>');
  });

  it('should work with multiple SVGs', () => {
    const html = '<div><svg id="one"><path d="M1" /></svg><svg id="two"><path d="M2" /></svg></div>';
    const result = collapseSvgs(html);

    expect(result).toContain('<div><svg /><svg /></div>');
  });

  it('should return the original HTML if no SVGs are found', () => {
    const html = '<div>No SVG here</div>';
    const result = collapseSvgs(html);
    expect(result).toBe(html);
  });
});
