import { MessageList, MessageListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './message-list-item.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Message List/Message List Item',
  id: 'rhc-message-list-item',
  component: MessageListItem,
  args: {
    description: 'Description',
    href: '#',
    label: 'Label',
    metaData: 'Meta Data',
  },
  argTypes: {
    description: {
      description: 'Description',
      control: 'text',
      table: {
        category: 'API',
      },
    },
    href: {
      description: 'Target URL',
      control: 'text',
      table: {
        category: 'API',
      },
    },
    label: {
      description: 'Label',
      control: 'text',
      table: {
        category: 'API',
      },
    },
    metaData: {
      description: 'Meta data',
      control: 'text',
      table: {
        category: 'API',
      },
    },
  },
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add NL Design System link when there is a page for MessageListItem
    figma:
      'https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=4070-5888&node-type=frame&t=xhXU5ugIkPqvOZwt-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/MessageListItem.tsx',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
  render: (args) => {
    return (
      <MessageList>
        <MessageListItem {...args} />
      </MessageList>
    );
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MessageListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: 'Description',
    href: '#',
    label: 'Label',
    metaData: 'Meta Data',
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
