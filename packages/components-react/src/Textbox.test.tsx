import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Textbox } from '.';

describe('Textbox', () => {
  it('renders a visible element', () => {
    const { container } = render(<Textbox />);

    const textbox = container.querySelector(':only-child');

    expect(textbox).toBeInTheDocument();
    expect(textbox).toBeVisible();
  });
});
