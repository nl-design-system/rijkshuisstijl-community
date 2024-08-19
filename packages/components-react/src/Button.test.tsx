import { render } from '@testing-library/react';
import { IconButton } from './Button';
import '@testing-library/jest-dom';

describe('IconButton', () => {
  it('renders an HTML button element', () => {
    const { container } = render(<IconButton label="example-icon-label" />);

    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
  });

  it('renders an sr-only label for accessibility', () => {
    const { container } = render(<IconButton label="example-icon-label" />);

    const span = container.querySelector('button>span.rhc-button__sr-only');

    expect(span).toBeInTheDocument();

    expect(span).toHaveTextContent('example-icon-label');
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
    const { container } = render(<IconButton label="example-icon-label" disabled={true} />);

    const button = container.querySelector('button');

    expect(button).toBeDisabled();
  });

  it('can be hidden', () => {
    const { container } = render(<IconButton label="example-icon-label" hidden />);

    const button = container.querySelector('button');

    expect(button).not.toBeVisible();
  });

  it('can have a additional class name', () => {
    const { container } = render(<IconButton label="example-icon-label" className="large" />);

    const button = container.querySelector('button');

    expect(button).toHaveClass('large');

    expect(button).toHaveClass('utrecht-button');
  });

  it('can trigger a click event', () => {
    const handleClick = jest.fn();

    const { container } = render(<IconButton label="example-icon-label" onClick={handleClick} />);

    const button = container.querySelector<HTMLElement>('button');

    button?.click();

    expect(handleClick).toHaveBeenCalled();
  });
});
