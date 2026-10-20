import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Button, IconButton } from './Button';

describe('Button', () => {
  it('renders an HTML button element', () => {
    const { container } = render(<Button>Label</Button>);

    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
  });

  it('renders the nl-button and rhc-button class names', () => {
    const { container } = render(<Button>Label</Button>);

    const button = container.querySelector('button');

    expect(button).toHaveClass('nl-button');

    expect(button).toHaveClass('rhc-button');
  });

  it('renders the purpose variant class name', () => {
    const { container } = render(<Button purpose="primary">Label</Button>);

    const button = container.querySelector('button');

    expect(button).toHaveClass('nl-button--primary');
  });

  it('translates the deprecated appearance property to the purpose variant', () => {
    // eslint-disable-next-line sonarjs/deprecation -- test van de deprecated appearance property
    const { container } = render(<Button appearance="primary-action-button">Label</Button>);

    const button = container.querySelector('button');

    expect(button).toHaveClass('nl-button--primary');
  });

  it('lets purpose win over the deprecated appearance property', () => {
    const { container } = render(
      // eslint-disable-next-line sonarjs/deprecation -- test van de deprecated appearance property
      <Button appearance="primary-action-button" purpose="subtle">
        Label
      </Button>,
    );

    const button = container.querySelector('button');

    expect(button).toHaveClass('nl-button--subtle');

    expect(button).not.toHaveClass('nl-button--primary');
  });

  it('uses aria-disabled for the disabled state', () => {
    const { container } = render(<Button disabled>Label</Button>);

    const button = container.querySelector('button');

    expect(button).toHaveAttribute('aria-disabled', 'true');

    expect(button).not.toHaveAttribute('disabled');
  });

  it('uses the disabled attribute for htmlDisabled', () => {
    const { container } = render(<Button htmlDisabled>Label</Button>);

    const button = container.querySelector('button');

    expect(button).toBeDisabled();
  });

  it('marks a busy button with aria-disabled', () => {
    const { container } = render(<Button busy>Label</Button>);

    const button = container.querySelector('button');

    expect(button).toHaveClass('nl-button--busy');

    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('can have a additional class name', () => {
    const { container } = render(<Button className="large">Label</Button>);

    const button = container.querySelector('button');

    expect(button).toHaveClass('large');

    expect(button).toHaveClass('nl-button');
  });

  it('can trigger a click event', () => {
    const handleClick = vi.fn();

    const { container } = render(<Button onClick={handleClick}>Label</Button>);

    const button = container.querySelector<HTMLElement>('button');

    button?.click();

    expect(handleClick).toHaveBeenCalled();
  });
});

describe('IconButton', () => {
  it('renders an HTML button element', () => {
    const { container } = render(<IconButton label="example-icon-label" />);

    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
  });

  it('renders a visually hidden label for accessibility', () => {
    render(<IconButton label="example-icon-label" />);

    const span = screen.getByText('example-icon-label');

    expect(span).toHaveClass('nl-button__label');
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<IconButton label="example-icon-label" />);

    const button = container.querySelector('button');

    expect(button).toHaveClass('rhc-button');

    expect(button).toHaveClass('rhc-button--icon-only');

    expect(button).toHaveClass('nl-button--icon-only');
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

    expect(button).toHaveAttribute('aria-disabled', 'true');
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

    expect(button).toHaveClass('nl-button');
  });

  it('renders the icon inside the icon slot', () => {
    const { container } = render(<IconButton icon="kalender" label="example-icon-label" />);

    const icon = container.querySelector('.nl-button__icon-start');

    expect(icon).toBeInTheDocument();
  });

  it('can trigger a click event', () => {
    const handleClick = vi.fn();

    const { container } = render(<IconButton label="example-icon-label" onClick={handleClick} />);

    const button = container.querySelector<HTMLElement>('button');

    button?.click();

    expect(handleClick).toHaveBeenCalled();
  });
});

afterEach(() => cleanup());
