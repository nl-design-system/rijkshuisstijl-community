import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { OrderedList } from './entrypoint';

describe('OrderedList', () => {
  it('renders a visible element', () => {
    const { container } = render(<OrderedList />);

    const orderedList = container.querySelector(':only-child');

    expect(orderedList).toBeInTheDocument();
    expect(orderedList).toBeVisible();
  });
});

afterEach(() => cleanup());
