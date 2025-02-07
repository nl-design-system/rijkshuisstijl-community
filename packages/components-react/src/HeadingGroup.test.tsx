import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HeadingGroup } from '.';

describe('Heading Group', () => {
  it('renders a visible element', () => {
    const { container } = render(<HeadingGroup />);

    const headingGroup = container.querySelector(':only-child');

    expect(headingGroup).toBeInTheDocument();
    expect(headingGroup).toBeVisible();
  });
});
