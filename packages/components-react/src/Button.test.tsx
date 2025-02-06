import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { IconButton } from './Button';

describe('IconButton', () => {
  it('renders an HTML button element', () => {
    const { container } = render(<IconButton label="example-icon-label" />);

    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
  });

  it('renders an sr-only label for accessibility', () => {
    render(<IconButton label="example-icon-label" />);

    const span = screen.getByText('example-icon-label');

    expect(span).toHaveClass('rhc-button__sr-only');
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<IconButton label="example-icon-label" />);

    const button = container.querySelector('button');

    expect(button).toHaveClass('rhc-button');

    expect(button).toHaveClass('rhc-button--icon-only');
  });

  it('is not disabled by default', () => {
    const { container } = render(<IconButton label="example-icon-label" />);

    const button = container.querySelector('button');

    expect(button).not.toBeDisabled();

    expect(button).not.toHaveAttribute('aria-disabled');

    expect(button).not.toHaveAttribute('disabled');
  });

  it('can have a disabled state', () => {
    const { container } = render(<IconButton disabled={true} label="example-icon-label" />);

    const button = container.querySelector('button');

    expect(button).toBeDisabled();
  });

  it('can be hidden', () => {
    const { container } = render(<IconButton hidden label="example-icon-label" />);

    const button = container.querySelector('button');

    expect(button).not.toBeVisible();
  });

  it('can have a additional class name', () => {
    const { container } = render(<IconButton className="large" label="example-icon-label" />);

    const button = container.querySelector('button');

    expect(button).toHaveClass('large');

    expect(button).toHaveClass('utrecht-button');
  });

  it('can trigger a click event', () => {
    const handleClick = vi.fn();

    const { container } = render(<IconButton label="example-icon-label" onClick={handleClick} />);

    const button = container.querySelector<HTMLElement>('button');

    button?.click();

    expect(handleClick).toHaveBeenCalled();
  });
});
