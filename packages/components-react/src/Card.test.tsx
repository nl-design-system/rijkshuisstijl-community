import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { describe, expect, it } from 'vitest';
import { Card, FullBleedCard, HorizontalImageCard } from '.';

const linkTest = (component: ReactElement, href: string, title: string) => {
  const { getByRole } = render(component);
  const link = getByRole('link');
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', href);
  expect(link).toHaveAttribute('title', title);
};

describe('Card', () => {
  describe('Default card', () => {
    it('renders a visible element', () => {
      const { container } = render(<Card heading="Heading" href="#" />);
      const navBar = container.querySelector(':only-child');
      expect(navBar).toBeInTheDocument();
      expect(navBar).toBeVisible();
    });
    it('renders a link with the correct href and title', () => {
      linkTest(<Card heading="Heading" href="/example" title="Example Title" />, '/example', 'Example Title');
    });
  });

  describe('FullBleedCard', () => {
    it('renders a visible element', () => {
      const { container } = render(<FullBleedCard heading="Heading" href="#" imageSrc="#" />);
      const navBar = container.querySelector(':only-child');
      expect(navBar).toBeInTheDocument();
      expect(navBar).toBeVisible();
    });
    it('renders a link with the correct href and title', () => {
      linkTest(
        <FullBleedCard heading="Heading" href="/example" imageSrc="#" title="Example Title" />,
        '/example',
        'Example Title',
      );
    });
  });

  describe('HorizontalImageCard', () => {
    it('renders a visible element', () => {
      const { container } = render(<HorizontalImageCard heading="Heading" href="#" imageSrc="#" />);
      const navBar = container.querySelector(':only-child');
      expect(navBar).toBeInTheDocument();
      expect(navBar).toBeVisible();
    });
    it('renders a link with the correct href and title', () => {
      linkTest(
        <HorizontalImageCard heading="Heading" href="/example" imageSrc="#" title="Example Title" />,
        '/example',
        'Example Title',
      );
    });
  });
});
