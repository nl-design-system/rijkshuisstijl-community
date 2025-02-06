import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FormFieldSelect } from '.';

describe('FormFieldSelect', () => {
  const defaultProps = {
    label: 'Test Label',
  };
  it('renders a visible element', () => {
    const { container } = render(<FormFieldSelect {...defaultProps} />);

    const formFieldSelect = container.querySelector(':only-child');

    expect(formFieldSelect).toBeInTheDocument();
    expect(formFieldSelect).toBeVisible();
  });
});
