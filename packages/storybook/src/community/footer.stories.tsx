import { Footer, Icon, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './footer.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Footer',
  id: 'rhc-footer',
  component: Footer,
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
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
    headingLevel: 4,
    background: 'primary-filled',
    columns: [
      {
        heading: 'Service',
        children: (
          <LinkList>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Contact
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Abonneren
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              RSS
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Vacatures
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Sitemap
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Help
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Archief
            </LinkListLink>
          </LinkList>
        ),
      },
      {
        heading: 'Over deze site',
        children: (
          <LinkList>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Over Rijksoverheid.nl
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Wetten en regelingen
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Copyright
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Privacy
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Cookies
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Toegankelijkheid
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Open data
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Kwetsbaarheid melden
            </LinkListLink>
          </LinkList>
        ),
      },
    ],
  },
};
