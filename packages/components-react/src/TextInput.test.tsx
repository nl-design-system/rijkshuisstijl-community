import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { TextInput } from '.';

describe('Textbox', () => {
  it('renders a visible element', () => {
    const { container } = render(<TextInput />);

    const textInput = container.querySelector(':only-child');

    expect(textInput).toBeInTheDocument();
    expect(textInput).toBeVisible();
  });
});
