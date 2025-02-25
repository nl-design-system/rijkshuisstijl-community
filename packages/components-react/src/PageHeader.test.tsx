import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { PageHeader } from '.';

describe('PageHeader', () => {
  it('renders a visible element', () => {
    const { container } = render(<PageHeader />);

    const pageHeader = container.querySelector(':only-child');

    expect(pageHeader).toBeInTheDocument();
    expect(pageHeader).toBeVisible();
  });
});

afterEach(() => cleanup());
