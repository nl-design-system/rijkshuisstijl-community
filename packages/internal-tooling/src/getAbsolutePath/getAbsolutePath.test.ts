import { describe, expect, it } from 'vitest';
import { getAbsolutePath } from '.';

describe('getAbsolutePath', () => {
  it('should return the absolute path of a package', () => {
    // Using vitest which is installed in this project
    const path = getAbsolutePath('vitest');
    expect(path).toBeTruthy();
    expect(path).toContain('node_modules');
    expect(path).toContain('vitest');
  });

  it('should return a string', () => {
    const path = getAbsolutePath('vitest');
    expect(typeof path).toBe('string');
  });

  it('should throw an error for a non-existent package', () => {
    expect(() => {
      getAbsolutePath('this-package-definitely-does-not-exist-12345');
    }).toThrow();
  });
});
