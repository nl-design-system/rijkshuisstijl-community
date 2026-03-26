import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { PageLayout } from './entrypoint';

describe('PageLayout', () => {
  it('renders a visible element', () => {
    const { container } = render(<PageLayout />);

    const pageLayout = container.querySelector(':only-child');

    expect(pageLayout).toBeInTheDocument();
    expect(pageLayout).toBeVisible();
  });
});

afterEach(() => cleanup());
