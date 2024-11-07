import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { NavBar } from '.';

describe('NavBar', () => {
  it('renders a visible element', () => {
    const { container } = render(<NavBar items={[]} />);

    const navBar = container.querySelector(':only-child');

    expect(navBar).toBeInTheDocument();
    expect(navBar).toBeVisible();
  });
});
