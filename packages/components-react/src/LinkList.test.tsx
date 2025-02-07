import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LinkList } from '.';

describe('LinkList', () => {
  it('renders a visible element', () => {
    const { container } = render(<LinkList />);

    const linkList = container.querySelector(':only-child');

    expect(linkList).toBeInTheDocument();
    expect(linkList).toBeVisible();
  });
});
