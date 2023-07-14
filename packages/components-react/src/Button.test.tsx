import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('renders a button role element', () => {
    render(<Button>OK</Button>);

    const button = screen.getByRole('button', {
      name: 'OK',
    });

    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });

  it('renders an HTML button element', () => {
    const { container } = render(<Button />);

    const button = container.querySelector('button:only-child');

    expect(button).toBeInTheDocument();
  });

  it('renders labels that contain HTML rich text content', () => {
    const { container } = render(
      <Button>
        Order <strong>now</strong>
      </Button>,
    );

    const button = container.querySelector(':only-child');

    const richText = button?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>();

    const { container } = render(<Button ref={ref} />);

    const button = container.querySelector(':only-child');

    expect(ref.current).toBe(button);
  });
});
