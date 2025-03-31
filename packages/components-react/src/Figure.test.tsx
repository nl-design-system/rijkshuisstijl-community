import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Figure } from '.';

describe('Figure', () => {
  afterEach(() => cleanup());

  it('renders a visible element', () => {
    const { container } = render(<Figure />);
    const figure = container.querySelector(':only-child');
    expect(figure).toBeInTheDocument();
    expect(figure).toBeVisible();
  });

  it('renders children inside the figure', () => {
    const { getByText } = render(
      <Figure>
        <span>Test Child</span>
      </Figure>,
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('applies border radius styles correctly', () => {
    const { container } = render(
      <Figure
        borderEndEndRadius="10"
        borderEndStartRadius="15"
        borderStartEndRadius="20"
        borderStartStartRadius="25"
      />,
    );
    const figure = container.firstChild;
    expect(figure).toHaveStyle({ '--utrecht-figure-img-border-end-end-radius': '10px' });
    expect(figure).toHaveStyle({ '--utrecht-figure-img-border-end-start-radius': '15px' });
    expect(figure).toHaveStyle({ '--utrecht-figure-img-border-start-end-radius': '20px' });
    expect(figure).toHaveStyle({ '--utrecht-figure-img-border-start-start-radius': '25px' });
  });

  it('passes additional props to UtrechtFigure', () => {
    const { container } = render(<Figure className="custom-class" id="custom-id" />);
    const figure = container.firstChild;
    expect(figure).toHaveAttribute('id', 'custom-id');
    expect(figure).toHaveClass('custom-class');
  });
});
