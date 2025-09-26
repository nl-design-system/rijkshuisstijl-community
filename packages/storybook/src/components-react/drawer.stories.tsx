import { Drawer, Heading, Paragraph } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './drawer.md?raw';

const meta = {
  title: 'Drawer',
  id: 'rhc-drawer',
  component: Drawer,
  decorators: [(Story) => <div style={{ minHeight: '256px' }}>{Story()}</div>],
  args: {
    children: '',
    open: false,
    modal: false,
  },
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['', 'block-end', 'block-start', 'inline-end', 'inline-start'],
    },
    children: {
      description: 'Content of the drawer',
    },
    open: {
      control: { type: 'boolean' },
    },
    modal: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Drawer.tsx',
    nldesignsystem: 'https://www.nldesignsystem.nl/drawer',
    figma:
      'https://www.figma.com/design/3cORTNo1mrlNBUtU5a8YXK/NL-Design-System---Bibliotheek--Community-?node-id=6021-5140',
    componentOrigin: 'Dit component is overgenomen van Utrech Drawer',
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Heading level={1}>Lorem ipsum</Heading>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
    open: true,
  },
};

export const InlineStart: Story = {
  args: {
    ...Default.args,
    align: 'inline-start',
  },
  name: 'inline-start alignment',
};

export const InlineEnd: Story = {
  args: {
    ...Default.args,
    align: 'inline-end',
  },
  name: 'inline-end alignment',
};

export const BlockStart: Story = {
  args: {
    ...Default.args,
    align: 'block-start',
  },
  name: 'block-start alignment',
};

export const BlockEnd: Story = {
  args: {
    ...Default.args,
    align: 'block-end',
  },
  name: 'block-end alignment',
};

export const OverflowY: Story = {
  args: {
    align: 'inline-start',
    children: Array(10)
      .fill(0)
      .map(() => (
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      )),
    open: true,
  },
  name: 'Overflow Y',
};
