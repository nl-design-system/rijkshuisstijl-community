import '@testing-library/jest-dom/vitest';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { CodeInputGroup } from './CodeInputGroup';

describe('CodeInputGroup', () => {
  it('should render correct number of code inputs', async () => {
    const codeLength = 6;
    render(<CodeInputGroup codeLength={codeLength} />);
    const inputs = await screen.findAllByTestId('rhc-code-input', { exact: false });

    expect(inputs).toHaveLength(codeLength);
  });

  it('should set focus on next input', async () => {
    render(<CodeInputGroup codeLength={4} />);

    await userEvent.type(screen.getByTestId('rhc-code-input-0'), '0');

    const inputs = await screen.findAllByTestId('rhc-code-input', { exact: false });
    expect(inputs[0]).not.toHaveFocus();
    expect(inputs[1]).toHaveFocus();
  });

  it('should set focus on previous input', async () => {
    render(<CodeInputGroup codeLength={4} />);
    await userEvent.type(screen.getByTestId('rhc-code-input-0'), '012');

    const inputs = await screen.findAllByTestId('rhc-code-input', { exact: false });
    expect(inputs[3]).toHaveFocus();

    await userEvent.type(screen.getByTestId('rhc-code-input-2'), '{backspace}');

    expect(inputs[3]).not.toHaveFocus();
  });

  it('should call onChange with correct value', async () => {
    const onChange = vi.fn();
    render(<CodeInputGroup codeLength={4} onChange={onChange} />);

    await userEvent.type(screen.getByTestId('rhc-code-input-0'), '0123');

    expect(onChange).toHaveBeenCalledTimes(4);
    expect(onChange).toHaveBeenNthCalledWith(1, '0');
    expect(onChange).toHaveBeenNthCalledWith(2, '01');
    expect(onChange).toHaveBeenNthCalledWith(3, '012');
    expect(onChange).toHaveBeenNthCalledWith(4, '0123');
  });

  describe('capitalization', () => {
    it('should add class to inputs if capitalize prop is set', async () => {
      render(<CodeInputGroup capitalize codeLength={4} />);
      const inputs = await screen.findAllByTestId('rhc-code-input', { exact: false });

      expect(inputs).toSatisfy((inputs) =>
        inputs.every((input: HTMLElement) => input.classList.contains('rhc-code-input--capitalized')),
      );
    });

    it('should automatically capitalize onChange parameter if capitalize prop is set', async () => {
      const onChange = vi.fn();
      render(<CodeInputGroup capitalize codeLength={4} onChange={onChange} />);

      await userEvent.type(screen.getByTestId('rhc-code-input-0'), 'a');

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenNthCalledWith(1, 'A');
    });
  });
});

afterEach(() => cleanup());
