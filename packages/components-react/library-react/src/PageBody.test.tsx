import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { PageBody } from './entrypoint';

describe('PageBody', () => {
  it('renders a visible element', () => {
    const { container } = render(<PageBody />);

    const pageBody = container.querySelector(':only-child');

    expect(pageBody).toBeInTheDocument();
    expect(pageBody).toBeVisible();
  });
});

afterEach(() => cleanup());
