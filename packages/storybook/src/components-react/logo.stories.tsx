import { Icon, Logo, LogoProps } from '@rijkshuisstijl-community/components-react';
import {
  rhcLogoColor,
  rhcLogoImageBackgroundColor,
  rhcLogoImageColor,
} from '@rijkshuisstijl-community/design-tokens/dist';
import { Meta, StoryObj } from '@storybook/react-vite';
import { CSSProperties } from 'react';
import readme from './logo.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

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
  title: 'Logo',
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
      name: '--rhc-logo-image-background-color',
      control: 'color',
      description: 'Changes background color of the image',
      table: {
        category: 'Design tokens',
      },
    },
    imageIconColor: {
      name: '--rhc-logo-image-color',
      control: 'color',
      description: 'Changes color of the image icon',
      table: {
        category: 'Design tokens',
      },
    },
    textColor: {
      name: '--rhc-logo-color',
      control: 'color',
      description: 'Changes text color',
      table: {
        category: 'Design tokens',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    status: {
      type: 'STABLE',
    },
    // TODO: add Figma and NL DesignSystem links
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Logo.tsx',
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
