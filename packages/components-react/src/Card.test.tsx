import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Card, FullBleedCard, HorizontalImageCard } from '.';

describe('Card', () => {
  it('renders a visible element', () => {
    const { container } = render(<Card heading="Heading" href="#" />);

    const navBar = container.querySelector(':only-child');

    expect(navBar).toBeInTheDocument();
    expect(navBar).toBeVisible();
  });
});

describe('FullBleedCard', () => {
  it('renders a visible element', () => {
    const { container } = render(<FullBleedCard heading="Heading" href="#" imageSrc="#" />);

    const navBar = container.querySelector(':only-child');

    expect(navBar).toBeInTheDocument();
    expect(navBar).toBeVisible();
  });
});

describe('HorizontalImageCard', () => {
  it('renders a visible element', () => {
    const { container } = render(<HorizontalImageCard heading="Heading" href="#" imageSrc="#" />);

    const navBar = container.querySelector(':only-child');

    expect(navBar).toBeInTheDocument();
    expect(navBar).toBeVisible();
  });
});
