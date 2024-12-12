import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CodeInputGroup } from './CodeInputGroup';

describe('CodeInput', () => {
  it('renders successfully', () => {
    render(<CodeInputGroup numberOfDigits={4} />);
    expect(screen.getByTestId('code-input-group-container')).toBeInTheDocument();
  });

  it('should render number of digits', async () => {
    const nDigits = 6;
    render(<CodeInputGroup numberOfDigits={nDigits} />);

    const inputs = await screen.findAllByTestId('input-item');
    expect(inputs).toHaveLength(nDigits);
  });

  it('should not accept anything else then digits', async () => {
    render(<CodeInputGroup numberOfDigits={4} />);

    await userEvent.type(screen.getByTestId('hidden-input'), '#A0@1D2f3');
    expect(screen.getByTestId('hidden-input')).toHaveValue('0123');
  });

  it('should set focus on next input', async () => {
    render(<CodeInputGroup numberOfDigits={4} />);
    await userEvent.type(screen.getByTestId('hidden-input'), '0');
    const inputs = await screen.findAllByTestId('input-item');

    expect(inputs[0]).not.toHaveClass('utrecht-textbox--focus-visible');
    expect(inputs[1]).toHaveClass('utrecht-textbox--focus-visible');
  });

  it('should set focus on previous input', async () => {
    render(<CodeInputGroup numberOfDigits={4} />);
    await userEvent.type(screen.getByTestId('hidden-input'), '012');

    const inputs = await screen.findAllByTestId('input-item');

    expect(inputs[3]).toHaveClass('utrecht-textbox--focus-visible');

    await userEvent.type(screen.getByTestId('hidden-input'), '{backspace}');

    expect(inputs[3]).not.toHaveClass('utrecht-textbox--focus-visible');
  });
});
