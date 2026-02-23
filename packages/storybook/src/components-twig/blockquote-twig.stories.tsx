import TwigBlockquote from '@rijkshuisstijl-community/components-twig/src/Blockquote.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../components-react/blockquote.md?raw';

const meta = {
  title: 'Blockquote',
  id: 'rhc-twig-blockquote',
  component: TwigBlockquote,
  argTypes: {
    attribution: {
      description: 'string',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    //Todo: voeg NL-Design system & Figma links toe
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/src/Blockquote.twig',
  },
} satisfies Meta<typeof TwigBlockquote>;

export default meta;

export const TwigBlockquoteDefault: StoryObj<typeof meta> = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
  name: 'Default',
};

export const TwigBlockquoteAttribution: StoryObj<typeof meta> = {
  args: {
    children: '"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"',
    attribution: '— Pippi Langkous',
  },
  name: 'Attribution',
};