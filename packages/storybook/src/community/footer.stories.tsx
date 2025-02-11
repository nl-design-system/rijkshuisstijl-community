import { ColumnLayout, Footer, Icon, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';
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
      options: ['level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6'],
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

function _toLinkList(items: string[]) {
  return (
    <LinkList>
      {items.map((item) => (
        <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
          {item}
        </LinkListLink>
      ))}
    </LinkList>
  );
}

export const DefaultFooter: Story = {
  args: {
    heading: 'Footer heading',
    appearanceLevel: 'level-1',
    background: 'primary-filled',
    columns: [
      {
        heading: 'Service',
        appearanceLevel: 'level-3',
        children: _toLinkList(['Contact', 'Abonneren', 'RSS', 'Vacatures', 'Sitemap', 'Help', 'Archief']),
      },
      {
        heading: 'Over deze site',
        appearanceLevel: 'level-3',
        children: _toLinkList([
          'Over deze organisatie',
          'Wetten en regelingen',
          'Copyright',
          'Privacy',
          'Cookies',
          'Toegankelijkheid',
          'Open data',
          'Kwetsbaarheid melden',
        ]),
      },
    ],
  },
};

export const ColumnLayoutFooter: Story = {
  args: {
    heading: 'Footer heading',
    appearanceLevel: 'level-1',
    background: 'primary-filled',
    children: (
      <ColumnLayout>
        {_toLinkList([
          'Over deze organisatie',
          'Wetten en regelingen',
          'Copyright',
          'Privacy',
          'Cookies',
          'Toegankelijkheid',
          'Open data',
          'Kwetsbaarheid melden',
        ])}
      </ColumnLayout>
    ),
  },
};

export const CustomHeadingFooter: Story = {
  args: {
    background: 'primary-filled',
    columns: [
      {
        heading: 'First heading',
        appearanceLevel: 'level-3',
        children: _toLinkList(['List item 1', 'List item 2', 'List item 3']),
      },
      {
        heading: 'Second heading',
        appearanceLevel: 'level-3',
        children: _toLinkList(['List item 1', 'List item 2', 'List item 3']),
      },
      {
        heading: 'Third heading',
        appearanceLevel: 'level-3',
        children: _toLinkList(['List item 1', 'List item 2', 'List item 3']),
      },
      {
        heading: 'Fourth heading',
        appearanceLevel: 'level-3',
        children: _toLinkList(['List item 1', 'List item 2', 'List item 3']),
      },
    ],
  },
};
