import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { PageContent } from '.';

describe('PageContent', () => {
  it('renders a visible element', () => {
    const { container } = render(<PageContent />);

    const pageContent = container.querySelector(':only-child');

    expect(pageContent).toBeInTheDocument();
    expect(pageContent).toBeVisible();
  });
});

afterEach(() => cleanup());
