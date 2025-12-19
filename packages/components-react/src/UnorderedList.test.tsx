import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { UnorderedList } from '.';

describe('UnorderedList', () => {
  it('renders a visible element', () => {
    render(<UnorderedList />);

    const unorderedList = screen.getByRole('list');

    expect(unorderedList).toBeInTheDocument();
    expect(unorderedList).toBeVisible();
  });

  it('applies custom classnames to <UnorderedList />', () => {
    render(<UnorderedList className="custom-class" />);

    const unorderedList = screen.getByRole('list');

    expect(unorderedList).toHaveClass('custom-class');
  });

  it('applies nested classnames to <UnorderedList />', () => {
    render(<UnorderedList nested />);

    const unorderedList = screen.getByRole('list');

    expect(unorderedList).toHaveClass('utrecht-unordered-list--nested');
  });
});

afterEach(() => cleanup());
