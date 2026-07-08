import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { LinkList, LinkListLink } from '@utrecht/component-library-react';
import { afterEach, describe, expect, it } from 'vitest';
import { Footer } from './Footer';

const Icon = ({ icon }: { icon: string }) => <>{icon}</>;

describe('Footer', () => {
  it('renders successfully with required props', () => {
    render(
      <Footer
        appearanceLevel={4}
        tagline="Footer tagline"
        columns={[
          {
            heading: 'Service',
            children: (
              <LinkList>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Contact
                </LinkListLink>
              </LinkList>
            ),
          },
          {
            heading: 'Over deze site',
            children: (
              <LinkList>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Over deze organisatie
                </LinkListLink>
              </LinkList>
            ),
          },
        ]}
      />,
    );
    expect(screen.getByText('Footer tagline')).toBeInTheDocument();
    expect(screen.getByText('Service')).toBeInTheDocument();
    expect(screen.getByText('Over deze site')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Over deze organisatie')).toBeInTheDocument();
  });

  it('renders the preFooter message if provided', () => {
    render(<Footer preFooter preFooterMessage="PreFooter Message" />);
    expect(screen.getByText('PreFooter Message')).toBeInTheDocument();
  });

  it('renders the subFooter if provided', () => {
    render(<Footer subFooter={<div>SubFooter Content</div>} />);
    expect(screen.getByText('SubFooter Content')).toBeInTheDocument();
  });

  it('renders the Back to Top button if enabled', () => {
    // eslint-disable-next-line sonarjs/deprecation
    render(<Footer backtotop />);
    expect(screen.getByText('Terug naar boven')).toBeInTheDocument();
  });

  it('renders the tagline as plain text instead of a heading', () => {
    render(<Footer tagline="Footer tagline" />);
    const tagline = screen.getByText('Footer tagline');
    expect(tagline).toHaveClass('rhc-page-footer__tagline');
    expect(tagline.closest('h1, h2, h3, h4, h5, h6')).toBeNull();
  });

  it('renders a landmark with an accessible name', () => {
    render(<Footer heading="Colofon" />);
    const footerElement = screen.getByRole('contentinfo', { name: 'Colofon' });
    expect(footerElement).toBeInTheDocument();
  });

  it('renders a visually hidden heading with the landmark name', () => {
    render(<Footer heading="Colofon" />);
    const headingElement = screen.getByRole('heading', { level: 2, name: 'Colofon' });
    expect(headingElement).toHaveClass('rhc-page-footer__heading');
    expect(headingElement).not.toHaveAttribute('hidden');
  });

  it('renders children inside the footer', () => {
    render(
      <Footer>
        <div>Custom Child</div>
      </Footer>,
    );
    expect(screen.getByText('Custom Child')).toBeInTheDocument();
  });

  describe('compact variant', () => {
    it('applies the compact class', () => {
      const { container } = render(<Footer tagline="De rijksoverheid. Voor Nederland" variant="compact" />);
      const footerElement = container.querySelector('.rhc-page-footer');
      expect(footerElement).toHaveClass('rhc-page-footer--compact');
    });

    it('renders the tagline as plain text, not as a heading', () => {
      render(<Footer tagline="De rijksoverheid. Voor Nederland" variant="compact" />);
      const tagline = screen.getByText('De rijksoverheid. Voor Nederland');
      expect(tagline).toBeInTheDocument();
      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    });

    it('renders links inside the footer landmark', () => {
      render(
        <Footer tagline="De rijksoverheid. Voor Nederland" variant="compact">
          <a href="#privacy">Privacy</a>
          <a href="#toegankelijkheid">Toegankelijkheid</a>
        </Footer>,
      );
      const footerElement = screen.getByRole('contentinfo');
      expect(footerElement).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Privacy' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Toegankelijkheid' })).toBeInTheDocument();
    });
  });
});

afterEach(() => cleanup());
