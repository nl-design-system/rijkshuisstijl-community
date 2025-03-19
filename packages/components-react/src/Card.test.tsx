import '@testing-library/jest-dom/vitest';

import { cleanup, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
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
      linkTest(
        <Card heading="Heading" href="/example" linkLabel={'Example Label'} title="Example Title" />,
        '/example',
        'Example Title',
      );
    });
    describe('optional properties', () => {
      describe('imageSrc', () => {
        it('renders an image if imageSrc is provided', () => {
          const { getByTestId } = render(<Card heading="Heading" href="#" imageAlt="Just for testing" imageSrc="#" />);
          const imageContainer = getByTestId('rhc-card__image-container');
          expect(imageContainer).toBeInTheDocument();
        });

        it('does not render an image if imageSrc is not provided', () => {
          const { queryByTestId } = render(<Card heading="Heading" href="#" />);

          expect(queryByTestId('rhc-card__image-container')).not.toBeInTheDocument();
        });
      });

      describe('linkLabel', () => {
        it('renders a footer with a link and link label with the correct label', () => {
          const { queryByTestId } = render(<Card heading="Heading" href="#" linkLabel="Example Label" />);
          const link = queryByTestId('rhc-card__link');

          expect(link).toBeInTheDocument();
        });

        it('does not render a footer with a link and link label if linkLabel is not provided', () => {
          const { queryByTestId } = render(<Card heading="Heading" href="#" />);

          expect(queryByTestId('rhc-card__link')).not.toBeInTheDocument();
        });
      });

      describe('button', () => {
        it('renders a footer with a button if button is provided', () => {
          const { queryByTestId } = render(
            <Card button={<button>Example Button</button>} heading="Heading" href="#" />,
          );
          const button = queryByTestId('rhc-card__button');

          expect(button).toBeInTheDocument();
        });

        it('does not render a footer with a button if button is not provided', () => {
          const { queryByTestId } = render(<Card heading="Heading" href="#" />);

          expect(queryByTestId('rhc-card__button')).not.toBeInTheDocument();
        });
      });
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

afterEach(() => cleanup());
