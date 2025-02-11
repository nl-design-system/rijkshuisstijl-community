import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FormFieldErrorMessage } from '.';

describe('FormFieldErrorMessage', () => {
  it('renders a visible element', () => {
    const { container } = render(<FormFieldErrorMessage />);

    const formFieldErrorMessage = container.querySelector(':only-child');

    expect(formFieldErrorMessage).toBeInTheDocument();
    expect(formFieldErrorMessage).toBeVisible();
  });
});
