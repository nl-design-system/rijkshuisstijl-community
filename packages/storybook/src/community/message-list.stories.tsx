import { MessageList, MessageListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './message-list.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Message List',
  id: 'rhc-message-list',
  component: MessageList,
  args: {},
  render: () => {
    return (
      <MessageList>
        <MessageListItem
          description={'Uw pensioenoverzicht'}
          href={'#'}
          label={'Pensioenfonds'}
          metaData={'01-05-2024'}
          withBadge={{ ariaLabel: 'Nieuw', role: 'status' }}
        />
        <MessageListItem description={'Herinnering APK'} href={'#'} label={'RDW'} metaData={'04-04-2024'} />
        <MessageListItem
          description={'Aanslag OZB'}
          href={'#'}
          label={'Samenwerkings-verband Haaglanden'}
          metaData={'04-04-2024'}
        />
      </MessageList>
    );
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof MessageList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SmallContainer: Story = {
  render: (args) => (
    <div style={{ width: '380px', containerType: 'inline-size' }}>
      <MessageList {...args}>
        <MessageListItem
          description={'Uw pensioenoverzicht'}
          href={'#'}
          label={'Pensioenfonds'}
          metaData={'01-05-2024'}
          withBadge={{ ariaLabel: 'Nieuw', role: 'status' }}
        />
        <MessageListItem description={'Herinnering APK'} href={'#'} label={'RDW'} metaData={'04-04-2024'} />
        <MessageListItem
          description={'Aanslag OZB'}
          href={'#'}
          label={'Samenwerkings-verband Haaglanden'}
          metaData={'04-04-2024'}
        />
      </MessageList>
    </div>
  ),
};
