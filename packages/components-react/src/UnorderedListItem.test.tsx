import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { UnorderedListItem } from '.';

describe('UnorderedListItem', () => {
  it('renders a visible element', () => {
    const { container } = render(<UnorderedListItem />);

    const unorderedListItem = container.querySelector(':only-child');

    expect(unorderedListItem).toBeInTheDocument();
    expect(unorderedListItem).toBeVisible();
  });
});
