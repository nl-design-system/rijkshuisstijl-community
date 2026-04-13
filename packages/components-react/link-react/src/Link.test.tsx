import '@testing-library/jest-dom/vitest';

import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { Link } from './Link';

describe('Link', () => {
  it('renders an link role element', () => {
    render(<Link href="/">Home</Link>);

    const link = screen.getByRole('link', { name: 'Home' });

    expect(link).toBeInTheDocument();
    expect(link).toBeVisible();
  });

  it('renders an HTML a element', () => {
    const { container } = render(<Link href="#">Example</Link>);

    const link = container.querySelector('a:only-child');

    expect(link).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Link href="#" />);

    const link = container.querySelector(':only-child');

    expect(link).toHaveClass('nl-link');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <Link href="https://example.com/">
        <strong>https:</strong>
        {'//example.com/'}
      </Link>,
    );

    const link = container.querySelector(':only-child');

    const richText = link?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Link hidden href="#" />);

    const link = container.querySelector(':only-child');

    expect(link).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(
      <Link className="visited" href="#">
        https://example.com/
      </Link>,
    );

    const link = container.querySelector(':only-child');

    expect(link).toHaveClass('visited');
  });

  it('can have a additional class name', () => {
    const { container } = render(<Link className="large" href="#" />);

    const link = container.querySelector(':only-child');

    expect(link).toHaveClass('large');

    expect(link).toHaveClass('nl-link');
  });

  it('supports ref in React', () => {
    const ref = createRef<HTMLAnchorElement>();

    const { container } = render(
      <Link href="#" ref={ref}>
        {'https://example.com/'}
      </Link>,
    );

    const link = container.querySelector(':only-child');

    expect(ref.current).toBe(link);
  });
});

afterEach(() => cleanup());
