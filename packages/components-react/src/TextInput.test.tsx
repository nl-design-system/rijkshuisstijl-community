import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { TextInput } from '.';

describe('TextInput', () => {
  it('renders a visible element', () => {
    const { container } = render(<TextInput />);

    const textInput = container.querySelector(':only-child');

    expect(textInput).toBeInTheDocument();
    expect(textInput).toBeVisible();
  });
});

afterEach(() => cleanup());
