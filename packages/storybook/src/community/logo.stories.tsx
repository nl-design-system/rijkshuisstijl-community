import { Logo } from '@rijkshuisstijl-community/components-react';
import { DutchMapIcon } from '@rijkshuisstijl-community/components-react/src/icons';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Rijkshuisstijl/Logo',
  id: 'rijkshuisstijl-logo',
  component: Logo,
  argTypes: {
    organisation: {
      name: 'organisation',
      type: { name: 'string', required: true },
    },
    subtitle: {
      name: 'subtitle',
      type: { name: 'string', required: false },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    organisation: 'Voorbeeld organisatie',
  },
};

export const Organisation: Story = {
  args: {
    organisation: 'Voorbeeld organisatie',
  },
};

export const OrganisationSubtitle: Story = {
  args: {
    organisation: 'Voorbeeld organisatie',
    subtitle: 'Voorbeeld sub-title',
  },
  name: 'Organisation + subtitle',
};

export const ExampleIcon: Story = {
  args: {
    organisation: 'Voorbeeld organisatie',
    subtitle: 'Voorbeeld sub-title',
    children: <DutchMapIcon />,
  },
  name: 'Organisation + subtitle + example icon',
};
