import {
  getIconSet,
  NavigationList,
  NavigationListItem,
  NavigationListItemProps,
} from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './navigation-list-item.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'NavigationList/NavigationListItem',
  component: NavigationListItem,
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add NL Design System link when there is a page for NavigationListItem
    figma:
      'https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=4074-1580&node-type=canvas&t=HuDzyBW9wHdB2QVh-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/NavigationListItem.tsx',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
  argTypes: {
    description: {
      control: {
        type: 'text',
      },
    },
    href: {
      control: {
        type: 'text',
      },
    },
    icon: {
      control: {
        type: 'select',
      },
      options: Object.keys(getIconSet()),
    },
    label: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    description: 'Rijkshuisstijl Community Navigation List Item',
    label: 'Label',
    href: '#',
    icon: 'activiteit',
  },
  render: (args: NavigationListItemProps) => (
    <NavigationList>
      <NavigationListItem {...args} />
    </NavigationList>
  ),
} satisfies Meta<typeof NavigationListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomIcon: Story = {
  args: {
    icon: (
      <svg fill="none" height="20" viewBox="0 0 18 20" width="18" xmlns="http://www.w3.org/2000/svg">
        <path
          clipRule="evenodd"
          d="M5 0C5.55228 0 6 0.447715 6 1V2H12V1C12 0.447715 12.4477 0 13 0C13.5523 0 14 0.447715 14 1V2H15C16.6569 2 18 3.34315 18 5V17C18 18.6569 16.6569 20 15 20H3C1.34315 20 0 18.6569 0 17V5C0 3.34315 1.34315 2 3 2H4V1C4 0.447715 4.44772 0 5 0ZM4 4H3C2.44772 4 2 4.44772 2 5V8H16V5C16 4.44772 15.5523 4 15 4H14V5C14 5.55228 13.5523 6 13 6C12.4477 6 12 5.55228 12 5V4H6V5C6 5.55228 5.55228 6 5 6C4.44772 6 4 5.55228 4 5V4ZM16 10H2V17C2 17.5523 2.44772 18 3 18H15C15.5523 18 16 17.5523 16 17V10ZM4 13C4 12.4477 4.44772 12 5 12H7C7.55228 12 8 12.4477 8 13V15C8 15.5523 7.55228 16 7 16H5C4.44772 16 4 15.5523 4 15V13Z"
          fill="white"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
};
