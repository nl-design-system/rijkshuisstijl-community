import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Fieldset } from '.';

describe('Fieldset', () => {
  it('renders a visible element', () => {
    const { container } = render(<Fieldset />);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeVisible();
  });

  it('renders a legend when provided', () => {
    render(<Fieldset legend="Test Legend" legendId="test-legend" />);
    const legend = screen.getByText('Test Legend');
    expect(legend).toBeInTheDocument();
  });

  it('applies the correct legend id', () => {
    render(<Fieldset legend="Legend Text" legendId="custom-legend-id" />);
    const legend = screen.getByText('Legend Text');
    expect(legend).toHaveAttribute('id', 'custom-legend-id');
  });

  it('renders children inside the fieldset', () => {
    render(
      <Fieldset>
        <p>Child Element</p>
      </Fieldset>,
    );
    const child = screen.getByText('Child Element');
    expect(child).toBeInTheDocument();
  });

  it('applies the section class when section is true', () => {
    const { container } = render(<Fieldset section />);
    expect(container.firstChild).toHaveClass('utrecht-form-fieldset--section');
  });

  it('applies disabled class to legend when disabled', () => {
    render(<Fieldset disabled legend="Disabled Legend" />);
    const legend = screen.getByText('Disabled Legend');
    expect(legend).toHaveClass('utrecht-form-fieldset__legend--disabled');
  });

  it('applies invalid class to legend when invalid', () => {
    render(<Fieldset invalid legend="Invalid Legend" />);
    const legend = screen.getByText('Invalid Legend');
    expect(legend).toHaveClass('utrecht-form-fieldset__legend--invalid');
  });
});

afterEach(() => cleanup());
