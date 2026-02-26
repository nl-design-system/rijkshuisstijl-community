import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { TableCaption } from '.';

describe('TableCaption', () => {
  it('renders a visible element', () => {
    const { container } = render(
      <table>
        <TableCaption />
      </table>,
    );

    const tableCaption = container.querySelector('table > :only-child');

    expect(tableCaption).toBeInTheDocument();
    expect(tableCaption).toBeVisible();
  });
});

afterEach(() => cleanup());
