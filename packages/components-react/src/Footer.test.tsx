import '@testing-library/jest-dom/vitest';
import { Icon } from '@rijkshuisstijl-community/icon-react';
import { cleanup, render, screen } from '@testing-library/react';
import { LinkList, LinkListLink } from '@utrecht/component-library-react';
import { afterEach, describe, expect, it } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders successfully with required props', () => {
    render(
      <Footer
        appearanceLevel={4}
        heading="Footer heading"
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
    expect(screen.getByText('Footer heading')).toBeInTheDocument();
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
    render(<Footer backtotop />);
    expect(screen.getByText('Terug naar boven')).toBeInTheDocument();
  });

  it('applies background class when background prop is provided', () => {
    render(<Footer background="primary-filled" />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('rhc-page-footer--primary-filled');
  });

  it('renders children inside the footer', () => {
    render(
      <Footer>
        <div>Custom Child</div>
      </Footer>,
    );
    expect(screen.getByText('Custom Child')).toBeInTheDocument();
  });
});

afterEach(() => cleanup());
