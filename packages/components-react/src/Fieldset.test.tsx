import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Fieldset } from '.';

describe('Fieldset', () => {
  it('renders a visible element', () => {
    const { container } = render(<Fieldset />);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeVisible();
  });
});

afterEach(() => cleanup());
