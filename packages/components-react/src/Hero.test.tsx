import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import '@testing-library/jest-dom';

describe('Hero', () => {
  it('renders the hero component with the provided heading and subtext', () => {
    render(<Hero heading="Test Heading" imageAlt="Test Alt Text" imageSrc="test-image.jpg" subtext="Test Subtext" />);

    const heading = screen.getByText('Test Heading');
    const subtext = screen.getByText('Test Subtext');
    const image = screen.getByRole('img');

    expect(heading).toBeInTheDocument();
    expect(subtext).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });

  it('applies the correct alignment class', () => {
    render(
      <Hero
        alignment="inline-end"
        heading="Test Heading"
        imageAlt="Test Alt Text"
        imageSrc="test-image.jpg"
        subtext="Test Subtext"
      />,
    );

    const hero = screen.getByRole('img').closest('div');
    expect(hero).toHaveClass('rhc-hero--align-inline-end');
  });

  it('applies the correct aspect ratio class', () => {
    render(
      <Hero
        aspectRatio="4:3"
        heading="Test Heading"
        imageAlt="Test Alt Text"
        imageSrc="test-image.jpg"
        subtext="Test Subtext"
      />,
    );

    const hero = screen.getByRole('img').closest('div');
    expect(hero).toHaveClass('rhc-hero--aspect-ratio-4-3');
  });

  it('applies the correct rounded corner class', () => {
    render(
      <Hero
        heading="Test Heading"
        imageAlt="Test Alt Text"
        imageSrc="test-image.jpg"
        roundedCornerLocation="start-end"
        subtext="Test Subtext"
      />,
    );

    const hero = screen.getByRole('img').closest('div');
    expect(hero).toHaveClass('rhc-hero--rounded-border-custom');
    expect(hero).toHaveClass('rhc-hero--rounded-border-start-end');
  });

  it('renders children inside the hero component', () => {
    render(
      <Hero heading="Test Heading" imageAlt="Test Alt Text" imageSrc="test-image.jpg" subtext="Test Subtext">
        <button>Click Me</button>
      </Hero>,
    );

    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
  });
});
