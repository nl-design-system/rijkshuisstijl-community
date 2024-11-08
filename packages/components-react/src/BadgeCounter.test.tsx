import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { BadgeCounter } from '.';

describe('BadgeCounter', () => {
  it('renders a visible element', () => {
    const { container } = render(<BadgeCounter />);

    const badgeCounter = container.querySelector(':only-child');

    expect(badgeCounter).toBeInTheDocument();
    expect(badgeCounter).toBeVisible();
  });
});
