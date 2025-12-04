import '@testing-library/jest-dom/vitest';

import { cleanup, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { CardAsLink, FullBleedCardAsLink, HorizontalImageCardAsLink } from './CardAsLink';

const linkTest = (component: ReactElement, href: string, title: string) => {
  const { getByRole } = render(component);
  const link = getByRole('link');
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', href);
  expect(link).toHaveAttribute('title', title);
};

describe('CardAsLink', () => {
  describe('Default CardAsLink', () => {
    it('renders a visible element', () => {
      const { container } = render(<CardAsLink heading="Heading" href="#" />);
      const navBar = container.querySelector(':only-child');
      expect(navBar).toBeInTheDocument();
      expect(navBar).toBeVisible();
    });

    it('renders a link with the correct href and title', () => {
      linkTest(
        <CardAsLink heading="Heading" href="/example" linkLabel={'Example Label'} title="Example Title" />,
        '/example',
        'Example Title',
      );
    });

    describe('optional properties', () => {
      describe('imageSrc', () => {
        it('renders an image if imageSrc is provided', () => {
          const { getByTestId } = render(
            <CardAsLink heading="Heading" href="#" imageAlt="Just for testing" imageSrc="#" />,
          );
          const imageContainer = getByTestId('rhc-card-as-link__image-container');
          expect(imageContainer).toBeInTheDocument();
        });

        it('does not render an image if imageSrc is not provided', () => {
          const { queryByTestId } = render(<CardAsLink heading="Heading" href="#" />);

          expect(queryByTestId('rhc-card-as-link__image-container')).not.toBeInTheDocument();
        });
      });

      describe('linkLabel', () => {
        it('renders a footer with a link and link label with the correct label', () => {
          const { queryByTestId } = render(<CardAsLink heading="Heading" href="#" linkLabel="Example Label" />);
          const link = queryByTestId('rhc-card-as-link__link');

          expect(link).toBeInTheDocument();
        });

        it('does not render a footer with a link and link label if linkLabel is not provided', () => {
          const { queryByTestId } = render(<CardAsLink heading="Heading" href="#" />);

          expect(queryByTestId('rhc-card-as-link__link')).not.toBeInTheDocument();
        });
      });

      describe('button', () => {
        it('renders a footer with a button if button is provided', () => {
          const { queryByTestId } = render(
            <CardAsLink button={<button>Example Button</button>} heading="Heading" href="#" />,
          );
          const button = queryByTestId('rhc-card-as-link__button');

          expect(button).toBeInTheDocument();
        });

        it('does not render a footer with a button if button is not provided', () => {
          const { queryByTestId } = render(<CardAsLink heading="Heading" href="#" />);

          expect(queryByTestId('rhc-card-as-link__button')).not.toBeInTheDocument();
        });
      });
    });
  });

  describe('accessibility', () => {
    it('renders heading before image in the DOM to ensure correct reading order', () => {
      // In de HTML-structuur (DOM) staat de heading voor de afbeelding.
      // Dit zorgt ervoor dat screenreaders de content in de juiste volgorde kunnen voorlezen.
      // De visuele volgorde kan los daarvan met CSS worden aangepast, zonder impact op toegankelijkheid.

      const { getByText, getByAltText } = render(
        <CardAsLink heading="Heading" imageAlt="An example image" imageSrc="#" />,
      );

      const headingElement = getByText('Heading');
      const imageElement = getByAltText('An example image');

      // Controleer of beide elementen zichtbaar zijn
      expect(headingElement).toBeVisible();
      expect(imageElement).toBeVisible();

      // Controleer of de heading vóór de afbeelding staat in de DOM-structuur
      expect(headingElement.compareDocumentPosition(imageElement)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    });
  });
});

describe('FullBleedCardAsLink', () => {
  it('renders a visible element', () => {
    const { container } = render(<FullBleedCardAsLink heading="Heading" href="#" imageAlt="Test" imageSrc="#" />);
    const navBar = container.querySelector(':only-child');
    expect(navBar).toBeInTheDocument();
    expect(navBar).toBeVisible();
  });

  it('renders a link with the correct href and title', () => {
    linkTest(
      <FullBleedCardAsLink heading="Heading" href="/example" imageAlt="Test" imageSrc="#" title="Example Title" />,
      '/example',
      'Example Title',
    );
  });
});

describe('HorizontalImageCardAsLink', () => {
  it('renders a visible element', () => {
    const { container } = render(<HorizontalImageCardAsLink heading="Heading" href="#" imageAlt="Test" imageSrc="#" />);
    const navBar = container.querySelector(':only-child');
    expect(navBar).toBeInTheDocument();
    expect(navBar).toBeVisible();
  });

  it('renders a link with the correct href and title', () => {
    linkTest(
      <HorizontalImageCardAsLink
        heading="Heading"
        href="/example"
        imageAlt="Test"
        imageSrc="#"
        title="Example Title"
      />,
      '/example',
      'Example Title',
    );
  });
});

afterEach(() => cleanup());
