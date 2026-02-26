import TwigSeparator from '@rijkshuisstijl-community/components-twig/src/Separator.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../components-react/separator.md?raw';

const meta = {
  title: 'Separator',
  id: 'rhc-twig-separator',
  component: TwigSeparator,
  argTypes: {
    invisible: {
      description: 'Invisible',
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1-1&t=n1djYpmvDCKmAEUi-0',
    nldesignsystem: 'https://www.nldesignsystem.nl/separator/',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/src/Separator.twig',
  },
} satisfies Meta<typeof TwigSeparator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SeparatorDefault: Story = {
  name: 'Default',
};

export const SeparatorInvisible: Story = {
  name: 'Invisible',
  args: {
    invisible: true,
  },
};
