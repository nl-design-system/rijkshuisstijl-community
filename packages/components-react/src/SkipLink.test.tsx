import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { SkipLink } from '.';

describe('SkipLink', () => {
  it('renders a visible element', () => {
    const { container } = render(<SkipLink href={'#'} />);

    const skipLink = container.querySelector(':only-child');

    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toBeVisible();
  });
});

afterEach(() => cleanup());
