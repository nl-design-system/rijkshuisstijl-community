import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Paragraph } from '.';

describe('Paragraph', () => {
  it('renders a visible element', () => {
    const { container } = render(<Paragraph />);

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toBeVisible();
  });
});
