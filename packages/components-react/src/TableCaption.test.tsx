import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TableCaption } from '.';

describe('TableCaption', () => {
  it('renders a visible element', () => {
    const { container } = render(<TableCaption />);

    const tableCaption = container.querySelector(':only-child');

    expect(tableCaption).toBeInTheDocument();
    expect(tableCaption).toBeVisible();
  });
});
