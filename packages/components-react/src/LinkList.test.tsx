import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { LinkList } from '.';

describe('LinkList', () => {
  it('renders a visible element', () => {
    const { container } = render(<LinkList />);

    const linkList = container.querySelector(':only-child');

    expect(linkList).toBeInTheDocument();
    expect(linkList).toBeVisible();
  });
});

afterEach(() => cleanup());
