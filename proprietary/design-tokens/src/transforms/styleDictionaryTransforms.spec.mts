import { describe, expect, test, vi } from 'vitest';

import { skipRemTransform, transformSizeRemSafely } from './styleDictionaryTransforms.mts';

describe('styleDictionaryTransforms', () => {
  describe('skipRemTransform', () => {
    test('passes through CSS functions', () => {
      expect(skipRemTransform('clamp(1rem, 2vw, 2rem)')).toBe(true);
      expect(skipRemTransform('var(--utrecht-space-sm)')).toBe(true);
    });

    test('passes through CSS keywords', () => {
      expect(skipRemTransform('auto')).toBe(true);
      expect(skipRemTransform('fit-content')).toBe(true);
    });

    test('does not pass through plain numeric values', () => {
      expect(skipRemTransform('1')).toBe(false);
      expect(skipRemTransform('1rem')).toBe(false);
      expect(skipRemTransform('16px')).toBe(false);
    });
  });

  describe('transformSizeRemSafely', () => {
    test('returns valid CSS expressions unchanged', () => {
      const originalTransform = vi.fn();

      expect(transformSizeRemSafely(originalTransform, { value: 'clamp(1rem, 2vw, 2rem)' } as any, {}, {})).toBe(
        'clamp(1rem, 2vw, 2rem)',
      );

      expect(originalTransform).not.toHaveBeenCalled();
    });

    test('returns valid CSS keywords unchanged', () => {
      const originalTransform = vi.fn();

      expect(transformSizeRemSafely(originalTransform, { value: 'auto' } as any, {}, {})).toBe('auto');

      expect(originalTransform).not.toHaveBeenCalled();
    });

    test('delegates numeric values to the original transform', () => {
      const originalTransform = vi.fn().mockReturnValue('1rem');

      const result = transformSizeRemSafely(originalTransform, { value: '1' } as any, {}, {});

      expect(result).toBe('1rem');
      expect(originalTransform).toHaveBeenCalledOnce();
    });
  });
});
