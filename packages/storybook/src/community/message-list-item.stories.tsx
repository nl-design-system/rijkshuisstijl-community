import { MessageList, MessageListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './message-list-item.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Message List/Message List Item',
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
        component: readme,
      },
    },
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
