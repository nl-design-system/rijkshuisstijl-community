import { Footer, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import readme from './footer.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Footer',
  id: 'rhc-footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultFooter: Story = {
  args: {
    heading: 'De Rijksoverheid. Voor Nederland',
    columns: [
      {
        heading: 'Service',
        elements: (
          <LinkList>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              Contact
            </LinkListLink>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              Abonneren
            </LinkListLink>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              RSS
            </LinkListLink>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              Vacatures
            </LinkListLink>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              Sitemap
            </LinkListLink>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              Help
            </LinkListLink>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              Archief
            </LinkListLink>
          </LinkList>
        ),
      },
      {
        heading: 'Over deze site',
        elements: (
          <LinkList>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              Over Rijksoverheid.nl
            </LinkListLink>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              Wetten en regelingen
            </LinkListLink>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              Copyright
            </LinkListLink>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              Privacy
            </LinkListLink>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              Cookies
            </LinkListLink>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              Toegankelijkheid
            </LinkListLink>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              Open data
            </LinkListLink>
            <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
              Kwetsbaarheid melden
            </LinkListLink>
          </LinkList>
        ),
      },
    ],
  },
};
