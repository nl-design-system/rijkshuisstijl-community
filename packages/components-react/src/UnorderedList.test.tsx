import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { UnorderedList } from '.';

describe('UnorderedList', () => {
  it('renders a visible element', () => {
    const { container } = render(<UnorderedList />);

    const unorderedList = container.querySelector(':only-child');

    expect(unorderedList).toBeInTheDocument();
    expect(unorderedList).toBeVisible();
  });
});
