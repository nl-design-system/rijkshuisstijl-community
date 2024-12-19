import { Icon, Logo, LogoProps } from '@rijkshuisstijl-community/components-react';
import {
  rhcLogoColor,
  rhcLogoImageBackgroundColor,
  rhcLogoImageColor,
} from '@rijkshuisstijl-community/design-tokens/dist/wetgevend';
import { Meta, StoryObj } from '@storybook/react';
import { CSSProperties } from 'react';

interface LogoCSSProperties extends CSSProperties {
  '--rhc-logo-color': string;
  '--rhc-logo-image-background-color': string;
  '--rhc-logo-image-color': string;
}

interface LogoStoryProps extends LogoProps {
  imageBackgroundColor?: string;
  imageIconColor?: string;
  textColor?: string;
}

const LogoStory = ({ imageBackgroundColor, textColor, imageIconColor, ...args }: LogoStoryProps) => (
  <>
    <Logo
      {...args}
      style={
        {
          '--rhc-logo-color': textColor || rhcLogoColor,
          '--rhc-logo-image-background-color': imageBackgroundColor || rhcLogoImageBackgroundColor,
          '--rhc-logo-image-color': imageIconColor || rhcLogoImageColor,
        } as LogoCSSProperties
      }
    >
      <Icon icon={'nederland-map'} />
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
    imageBackgroundColor: rhcLogoImageBackgroundColor,
    imageIconColor: rhcLogoImageColor,
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
    imageBackgroundColor: {
      control: 'color',
      description: 'Changes background color of the image',
      table: {
        category: 'Demo',
      },
    },
    imageIconColor: {
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
  parameters: {
    status: {
      type: 'STABLE',
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
