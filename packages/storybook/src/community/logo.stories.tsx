import { Logo, type LogoProps } from '@rijkshuisstijl-community/components-react';
import { DutchMapIcon } from '@rijkshuisstijl-community/components-react/src/icons';
import { Meta, StoryObj } from '@storybook/react';
import { CSSProperties } from 'react';

interface LogoCSSProperties extends CSSProperties {
  '--rhc-logo-lint-background-color': string;
  '--rhc-logo-color': string;
}

interface LogoStoryProps extends LogoProps {
  backgroundColor?: string;
  color?: string;
}

const LogoStory = ({ backgroundColor, color, ...args }: LogoStoryProps) => (
  <>
    <Logo
      {...args}
      style={
        {
          '--rhc-logo-lint-background-color': backgroundColor || '#FFFFFF',
          '--rhc-logo-color': color || '#154273',
        } as LogoCSSProperties
      }
    >
      <DutchMapIcon />
    </Logo>
  </>
);

const meta = {
  title: 'Rijkshuisstijl/Logo',
  id: 'rhc-logo',
  component: LogoStory,
  args: {
    organisation: '',
    subtitle: '',
    backgroundColor: '#FFFFFF',
    color: '#154273',
  },
  argTypes: {
    organisation: {
      name: 'organisation',
      type: { name: 'string', required: true },
    },
    subtitle: {
      name: 'subtitle',
      type: { name: 'string', required: false },
    },
    backgroundColor: {
      control: 'color',
      description: 'Changes background color',
      table: {
        category: 'Demo',
      },
    },
    color: {
      control: 'color',
      description: 'Changes color',
      table: {
        category: 'Demo',
      },
    },
  },
  render: LogoStory,
} satisfies Meta<typeof LogoStory>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    organisation: 'Voorbeeld organisatie',
  },
};

export const WithSubtitle: Story = {
  args: {
    organisation: 'Voorbeeld organisatie',
    subtitle: 'Voorbeeld sub-title',
  },
};
