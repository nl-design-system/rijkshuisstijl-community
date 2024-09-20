import { Logo, type LogoProps } from '@rijkshuisstijl-community/components-react';
import { DutchMapIcon } from '@rijkshuisstijl-community/components-react/src/icons';
import { Meta, StoryObj } from '@storybook/react';
import { CSSProperties } from 'react';

interface LogoCSSProperties extends CSSProperties {
  '--rhc-logo-color': string;
  '--rhc-logo-lint-background-color': string;
  '--rhc-logo-lint-color': string;
}

interface LogoStoryProps extends LogoProps {
  lintBackgroundColor?: string;
  lintIconColor?: string;
  textColor?: string;
}

const LogoStory = ({ lintBackgroundColor, textColor, lintIconColor, ...args }: LogoStoryProps) => (
  <>
    <Logo
      {...args}
      style={
        {
          '--rhc-logo-color': textColor || '#154273',
          '--rhc-logo-lint-background-color': lintBackgroundColor || '#FFFFFF',
          '--rhc-logo-lint-color': lintIconColor || '#154273',
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
    lintBackgroundColor: '#FFFFFF',
    lintIconColor: '#154273',
    textColor: '#154273',
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
    lintBackgroundColor: {
      control: 'color',
      description: 'Changes background color of the lint',
      table: {
        category: 'Demo',
      },
    },
    lintIconColor: {
      control: 'color',
      description: 'Changes color of the lint icon',
      table: {
        category: 'Demo',
      },
    },
    textColor: {
      control: 'color',
      description: 'Changes text color',
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
