import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LinkList, LinkListLink } from '@utrecht/component-library-react';
import { Footer } from './Footer';
import { Icon } from './icon/Icon';

describe('Footer', () => {
  it('renders successfully with required props', () => {
    expect(1).toBe(1);
    render(
      <Footer
        heading="De Rijksoverheid. Voor Nederland"
        headingLevel={4}
        columns={[
          {
            heading: 'Contact',
            headingLevel: 4,
            children: [],
          },
          {
            heading: 'Service',
            children: [
              <LinkList key="1">
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Contact
                </LinkListLink>
              </LinkList>,
            ],
          },
          {
            heading: 'Over deze site',
            children: (
              <LinkList key="2">
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Over Rijksoverheid.nl
                </LinkListLink>
              </LinkList>
            ),
          },
        ]}
      />,
    );
    expect(screen.getByText('De Rijksoverheid. Voor Nederland')).toBeInTheDocument();
    expect(screen.getByText('Service')).toBeInTheDocument();
    expect(screen.getByText('Over deze site')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Over Rijksoverheid.nl')).toBeInTheDocument();
  });
});
