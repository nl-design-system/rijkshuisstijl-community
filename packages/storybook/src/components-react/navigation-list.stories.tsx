import { NavigationList, NavigationListItem } from '@rijkshuisstijl-community/components-react';
import { NavigationListProps } from '@rijkshuisstijl-community/components-react/dist/NavigationList';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './navigation-list.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Navigation List',
  component: NavigationList,
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add NL Design System link when there is a page for NavigationList
    figma:
      'https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=4074-1580&node-type=canvas&t=HuDzyBW9wHdB2QVh-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/NavigationList.tsx',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
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
