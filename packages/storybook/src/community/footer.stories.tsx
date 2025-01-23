import { Footer, Icon, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './footer.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

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
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam PageFooter), met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
  argTypes: {
    appearanceLevel: {
      description: 'Het uiterlijk van de heading in de footer.',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5],
      table: {
        type: { summary: 'number' },
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultFooter: Story = {
  args: {
    heading: 'Footer heading',
    appearanceLevel: 1,
    background: 'primary-filled',
    columns: [
      {
        heading: 'Service',
        appearanceLevel: 3,
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
        appearanceLevel: 3,
        children: (
          <LinkList>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Over deze organisatie
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

export const CustomHeadingFooter: Story = {
  args: {
    background: 'primary-filled',
    columns: [
      {
        heading: 'Heading 1',
        appearanceLevel: 3,
        children: (
          <LinkList>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 1
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 2
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 3
            </LinkListLink>
          </LinkList>
        ),
      },
      {
        heading: 'Heading 2',
        appearanceLevel: 3,
        children: (
          <LinkList>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 1
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 2
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 3
            </LinkListLink>
          </LinkList>
        ),
      },
      {
        heading: 'Heading 3',
        appearanceLevel: 3,
        children: (
          <LinkList>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 1
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 2
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 3
            </LinkListLink>
          </LinkList>
        ),
      },
      {
        heading: 'Heading 4',
        appearanceLevel: 3,
        children: (
          <LinkList>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 1
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 2
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 3
            </LinkListLink>
          </LinkList>
        ),
      },
    ],
  },
};
