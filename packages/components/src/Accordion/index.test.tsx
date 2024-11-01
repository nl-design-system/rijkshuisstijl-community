import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Accordion } from '.';

describe('Accordion', () => {
  it('renders a visible element', () => {
    const { container } = render(<Accordion />);

    const accordion = container.querySelector(':only-child');

    expect(accordion).toBeInTheDocument();
    expect(accordion).toBeVisible();
  });
});
