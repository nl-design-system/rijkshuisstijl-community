import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Fieldset } from '.';

describe('Fieldset', () => {
  it('renders a visible element', () => {
    const { container } = render(<Fieldset />);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeVisible();
  });
});
