import { Icon, LinkButton } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Link Button',
  id: 'rhc-link-button',
  component: LinkButton,
  args: {
    children: 'Label',
    disabled: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'STABLE',
    },
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/ButtonLink.tsx',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht met styling van de Rijkshuisstijl Community.',
  },
} as Meta<typeof LinkButton>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Label <Icon icon="chevron-down" />
      </>
    ),
  },
};
