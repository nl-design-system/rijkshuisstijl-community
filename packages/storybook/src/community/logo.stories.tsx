import { Icon, Logo, LogoProps } from '@rijkshuisstijl-community/components-react';
import { rhcLogoColor, rhcLogoImgBackgroundColor, rhcLogoImgColor } from '@rijkshuisstijl-community/design-tokens/dist';
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
          '--rhc-logo-color': textColor || rhcLogoColor,
          '--rhc-logo-img-background-color': imgBackgroundColor || rhcLogoImgBackgroundColor,
          '--rhc-logo-img-color': imgIconColor || rhcLogoImgColor,
        } as LogoCSSProperties
      }
    >
      <Icon
        icon={'nederland-map'}
        style={{
          height: '48px',
          width: '42px',
        }}
      />
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
    imgBackgroundColor: rhcLogoImgBackgroundColor,
    imgIconColor: rhcLogoImgColor,
    textColor: rhcLogoColor,
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
