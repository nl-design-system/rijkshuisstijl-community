import { MessageList, MessageListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './message-list.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Message List',
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
          withBadge={{ label: 'Nieuw', role: 'status' }}
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
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add NL Design System link when there is a page for MessageList
    figma:
      'https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=4070-5888&node-type=frame&t=xhXU5ugIkPqvOZwt-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/MessageList.tsx',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof MessageList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SmallContainer: Story = {
  render: (args) => (
    <div style={{ width: '380px' }}>
      <MessageList {...args}>
        <MessageListItem
          description={'Uw pensioenoverzicht'}
          href={'#'}
          label={'Pensioenfonds'}
          metaData={'01-05-2024'}
          withBadge={{ label: 'Nieuw', role: 'status' }}
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
