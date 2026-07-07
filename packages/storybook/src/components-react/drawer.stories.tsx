import {
  Button,
  DataSummary,
  DataSummaryItem,
  Drawer,
  Heading,
  IconButton,
  Paragraph,
} from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from './drawer.md?raw';

const drawerHeader = (
  <header className="utrecht-drawer__header" key="header">
    <Heading appearanceLevel={3} level={2}>
      Drawer title
    </Heading>
    <form className="utrecht-drawer__header-actions" method="dialog">
      <IconButton icon="kruis" label="Sluiten" purpose="secondary" type="submit" />
    </form>
  </header>
);

const drawerFooter = (
  <footer className="utrecht-drawer__footer" key="footer">
    <Button appearance="primary-action-button">Ja ik doe mee</Button>
  </footer>
);

const drawerChildren = [
  drawerHeader,
  <div className="utrecht-drawer__body" key="body">
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur. Morbi sed faucibus arcu turpis. Urna ante odio neque euismod quis. Magna
      velit pharetra varius tristique nisi placerat. Rhoncus elementum et porttitor ullamcorper.
    </Paragraph>
    <Heading appearanceLevel={5} level={3}>
      Datalist
    </Heading>
    <DataSummary appearance="row">
      <DataSummaryItem itemKey="2025 - 2026" itemValue="Ontwerp, aanvraag vergunningen en start aanbesteding" />
      <DataSummaryItem itemKey="2026" itemValue="Definitieve gunning en planning werkzaamheden" />
      <DataSummaryItem itemKey="2027" itemValue="In werking stellen van de vispassage" />
    </DataSummary>
    <Paragraph>Deze planning kan nog veranderen.</Paragraph>
  </div>,
  drawerFooter,
];

const overflowChildren = [
  drawerHeader,
  <div className="utrecht-drawer__body" key="body">
    {Array.from({ length: 10 }, (_, index) => (
      <Paragraph key={index}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
    ))}
  </div>,
  drawerFooter,
];

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
    componentOrigin: 'Dit component is overgenomen van Utrecht Drawer',
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
    align: 'inline-start',
    className: 'rhc-rounded-corner rhc-rounded-corner--size-md rhc-rounded-corner--position-start-end',
    children: drawerChildren,
    open: true,
  },
};

export const InlineEnd: Story = {
  args: {
    align: 'inline-end',
    className: 'rhc-rounded-corner rhc-rounded-corner--size-md rhc-rounded-corner--position-start-start',
    children: drawerChildren,
    open: true,
  },
  name: 'inline-end alignment',
};

export const BlockEnd: Story = {
  args: {
    align: 'block-end',
    className:
      'rhc-rounded-corner rhc-rounded-corner--size-md rhc-rounded-corner--position-start-start rhc-rounded-corner--position-start-end',
    children: drawerChildren,
    open: true,
  },
  name: 'block-end alignment',
};

export const OverflowY: Story = {
  args: {
    align: 'inline-start',
    className: 'rhc-rounded-corner rhc-rounded-corner--size-md rhc-rounded-corner--position-start-end',
    children: overflowChildren,
    open: true,
  },
  name: 'overflow',
};
