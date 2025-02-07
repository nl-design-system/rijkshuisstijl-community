import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Table } from '.';

describe('Table', () => {
  it('renders a visible element', () => {
    const { container } = render(<Table />);

    const table = container.querySelector(':only-child');

    expect(table).toBeInTheDocument();
    expect(table).toBeVisible();
  });
});
