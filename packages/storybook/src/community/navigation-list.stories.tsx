import { NavigationList, NavigationListItem } from '@rijkshuisstijl-community/components-react';
import { NavigationListProps } from '@rijkshuisstijl-community/components-react/dist/NavigationList';
import { Meta, StoryObj } from '@storybook/react';
import readme from './navigation-list.md?raw';

const meta = {
  title: 'Rijkshuisstijl/NavigationList',
  component: NavigationList,
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
  argTypes: {},
} satisfies Meta<typeof NavigationList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: NavigationListProps) => (
    <NavigationList {...args}>
      <NavigationListItem
        description="Uw gegevens, familie en identiteitsbewijs"
        href={'#'}
        icon="user"
        label="Identiteit"
      />
      <NavigationListItem
        description="Uw inkomen, toeslagen, bijdragen en belastingen"
        href={'#'}
        icon="currency-euro"
        label="Financiën"
      />
      <NavigationListItem
        description="Uw pensioen, arbeidsgegevens en uitkeringen"
        href={'#'}
        icon="briefcase"
        label="Werk"
      />
    </NavigationList>
  ),
};
export const SmallContainer: Story = {
  render: (args: NavigationListProps) => (
    <div style={{ width: '380px' }}>
      <NavigationList {...args}>
        <NavigationListItem
          description="Uw gegevens, familie en identiteitsbewijs"
          href={'#'}
          icon="user"
          label="Identiteit"
        />
        <NavigationListItem
          description="Uw inkomen, toeslagen, bijdragen en belastingen"
          href={'#'}
          icon="currency-euro"
          label="Financiën"
        />
        <NavigationListItem
          description="Uw pensioen, arbeidsgegevens en uitkeringen"
          href={'#'}
          icon="briefcase"
          label="Werk"
        />
      </NavigationList>
    </div>
  ),
};
