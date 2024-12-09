import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import '@testing-library/jest-dom';

describe('Hero', () => {
  it('renders the hero component with the provided heading and subHeading', () => {
    render(
      <Hero heading="Test Heading" imageAlt="Test Alt Text" imageSrc="test-image.jpg" subHeading="Test subHeading" />,
    );

    const heading = screen.getByText('Test Heading');
    const subHeading = screen.getByText('Test subHeading');
    const image = screen.getByRole('img');

    expect(heading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });

  it('logs an error and does not render when subHeading is provided without heading', () => {
    console.error = jest.fn();

    render(<Hero imageAlt="Test Alt Text" imageSrc="test-image.jpg" subHeading="Test subHeading" />);

    expect(console.error).toHaveBeenCalledWith('Hero component: "subHeading" is provided, but "heading" is missing');
    expect(screen.queryByText('Test subHeading')).toBeNull();
  });

  it('applies the correct alignment class', () => {
    render(
      <Hero
        heading="Test Heading"
        imageAlt="Test Alt Text"
        imageSrc="test-image.jpg"
        subHeading="Test subHeading"
        textAlign="end"
      />,
    );

    const hero = screen.getByRole('img').closest('div');

    expect(hero).toHaveClass('rhc-hero--text-align-end');
  });

  it('applies the correct aspect ratio class', () => {
    render(
      <Hero
        aspectRatio="4 / 3"
        heading="Test Heading"
        imageAlt="Test Alt Text"
        imageSrc="test-image.jpg"
        subHeading="Test subHeading"
      />,
    );

    const hero = screen.getByRole('img').closest('div');

    expect(hero).toHaveClass('rhc-hero--aspect-ratio-4-3');
  });

  it('applies the correct rounded corner class', () => {
    render(
      <Hero
        borderRadiusCorner="start-end"
        heading="Test Heading"
        imageAlt="Test Alt Text"
        imageSrc="test-image.jpg"
        subHeading="Test subHeading"
      />,
    );

    const hero = screen.getByRole('img').closest('div');

    expect(hero).toHaveClass('rhc-hero--custom-border-radius-corner');
    expect(hero).toHaveClass('rhc-hero--border-radius-corner-start-end');
  });

  it('renders children inside the hero component', () => {
    render(
      <Hero heading="Test Heading" imageAlt="Test Alt Text" imageSrc="test-image.jpg" subHeading="Test subHeading">
        <button>Click Me</button>
      </Hero>,
    );

    const button = screen.getByText('Click Me');

    expect(button).toBeInTheDocument();
  });
});
