import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { UnorderedList } from '.';

describe('UnorderedList', () => {
  it('renders a visible element', () => {
    const { container } = render(<UnorderedList />);

    const unorderedList = container.querySelector(':only-child');

    expect(unorderedList).toBeInTheDocument();
    expect(unorderedList).toBeVisible();
  });
});

afterEach(() => cleanup());
