import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SkipLink } from '.';

describe('SkipLink', () => {
  it('renders a visible element', () => {
    const { container } = render(<SkipLink />);

    const skipLink = container.querySelector(':only-child');

    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toBeVisible();
  });
});
