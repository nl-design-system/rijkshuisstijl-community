import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { FormFieldErrorMessage } from '.';

describe('FormFieldErrorMessage', () => {
  it('renders a visible element', () => {
    const { container } = render(<FormFieldErrorMessage />);

    const formFieldErrorMessage = container.querySelector(':only-child');

    expect(formFieldErrorMessage).toBeInTheDocument();
    expect(formFieldErrorMessage).toBeVisible();
  });
});

afterEach(() => cleanup());
