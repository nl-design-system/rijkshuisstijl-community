import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading } from '.';

describe('Heading', () => {
  it('renders a visible element', () => {
    const { container } = render(<Heading level={1} />);

    const heading = container.querySelector(':only-child');
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('applies the correct class names', () => {
    const { container } = render(<Heading className="custom-class" level={2} />);
    const heading = container.querySelector(':only-child');
    expect(heading).toHaveClass('rhc-heading');
    expect(heading).toHaveClass('custom-class');
  });

  it('applies the correct appearance level', () => {
    const { container } = render(<Heading appearanceLevel={4} level={3} />);
    const heading = container.querySelector(':only-child');
    expect(heading).not.toHaveClass('nl-heading--level-3');
    expect(heading).toHaveClass('nl-heading--level-4');
  });

  it('defaults appearance level to the heading level if not provided', () => {
    const { container } = render(<Heading level={5} />);
    const heading = container.querySelector(':only-child');
    expect(heading).toHaveClass('nl-heading--level-5');
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Heading level={1}>Test Heading</Heading>);
    expect(getByText('Test Heading')).toBeInTheDocument();
  });
});
