import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Toggletip } from '.';

describe('Toggletip', () => {
  it('renders a visible element', () => {
    const { container } = render(<Toggletip />);

    const toggletip = container.querySelector(':only-child');

    screen.debug();

    console.log('toggletip - test', toggletip);

    expect(toggletip).toBeInTheDocument();
  });
});
