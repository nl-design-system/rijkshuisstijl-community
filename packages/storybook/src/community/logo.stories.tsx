import { Logo, type LogoProps } from '@rijkshuisstijl-community/components-react';
import { DutchMapIcon } from '@rijkshuisstijl-community/components-react/src/icons';
import { Meta, StoryObj } from '@storybook/react';
import { CSSProperties } from 'react';

interface LogoCSSProperties extends CSSProperties {
  '--rhc-logo-color': string;
  '--rhc-logo-img-background-color': string;
  '--rhc-logo-img-color': string;
}

interface LogoStoryProps extends LogoProps {
  imgBackgroundColor?: string;
  imgIconColor?: string;
  textColor?: string;
}

const LogoStory = ({ imgBackgroundColor, textColor, imgIconColor, ...args }: LogoStoryProps) => (
  <>
    <Logo
      {...args}
      style={
        {
          '--rhc-logo-color': textColor || '#154273',
          '--rhc-logo-img-background-color': imgBackgroundColor || '#ffffff',
          '--rhc-logo-img-color': imgIconColor || '#154273',
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
    imgBackgroundColor: '#ffffff',
    imgIconColor: '#154273',
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
    imgBackgroundColor: {
      control: 'color',
      description: 'Changes background color of the image',
      table: {
        category: 'Demo',
      },
    },
    imgIconColor: {
      control: 'color',
      description: 'Changes color of the image icon',
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
