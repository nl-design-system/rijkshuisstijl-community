import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Hero } from './Hero';
import '@testing-library/jest-dom/vitest';

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

    const hero = screen.getByRole('img').closest('section');

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

    const hero = screen.getByRole('img').closest('section');

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

    const hero = screen.getByRole('img').closest('section');

    expect(hero).toHaveClass('rhc-hero--custom-border-radius-corner');
    expect(hero).toHaveClass('rhc-hero--border-radius-corner-start-end');
  });

  it('applies the right headingAppearanceLevel class if provided', () => {
    render(
      <Hero
        heading="Test Heading"
        headingAppearanceLevel={5}
        imageAlt="Test Alt Text"
        imageSrc="test-image.jpg"
        subHeading="Test subHeading"
      />,
    );

    const heading = screen.getByRole('heading');

    expect(heading).toHaveClass('nl-heading--level-5');
  });

  it('does not change header level when applying headingAppearanceLevel', () => {
    render(
      <Hero
        heading="Test Heading"
        headingAppearanceLevel={5}
        imageAlt="Test Alt Text"
        imageSrc="test-image.jpg"
        subHeading="Test subHeading"
      />,
    );

    const heading = screen.queryByRole('heading', { level: 5 });
    expect(heading).not.toBeInTheDocument();
  });

  it('applies the right headingAppearanceLevel class if headingLevel is provided', () => {
    render(
      <Hero
        heading="Test Heading"
        headingLevel={5}
        imageAlt="Test Alt Text"
        imageSrc="test-image.jpg"
        subHeading="Test subHeading"
      />,
    );

    const heading = screen.getByRole('heading');

    expect(heading).toHaveClass('nl-heading--level-5');
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

afterEach(() => cleanup());
