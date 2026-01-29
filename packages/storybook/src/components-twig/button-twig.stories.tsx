import TwigButton from '@rijkshuisstijl-community/components-twig/src/Button.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import DrupalAttribute from 'drupal-attribute';
import readme from '../components-react/button.md?raw';

const meta = {
  title: 'Button',
  id: 'rhc-twig-button',
  component: TwigButton,
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: [undefined, 'primary-action', 'secondary-action', 'subtle'],
    },
    type: {
      description: 'Type',
      control: { type: 'select' },
      options: [undefined, 'disabled', 'busy'],
    },
    iconLeft: {
      description: 'Icon left',
      control: { type: 'boolean' },
    },
    iconRight: {
      description: 'Icon right',
      control: { type: 'boolean' },
    },
    iconOnly: {
      description: 'Icon only',
      control: { type: 'boolean' },
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
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/src/Button.twig',
  },
} satisfies Meta<typeof TwigButton>;

export default meta;

const iconLeft_svg_attributes = new DrupalAttribute([
  ['class', ['icon', 'icon-tabler', 'tabler-icon', 'tabler-icon-calendar-event']],
  ['xmlns', 'http://www.w3.org/2000/svg'],
  ['width', 24],
  ['height', 24],
  ['viewBox', '0 0 24 24'],
  ['fill', 'none'],
  ['stroke', 'currentColor'],
  ['stroke-width', 2],
  ['stroke-linecap', 'round'],
  ['stroke-linejoin', 'round'],
]);

const iconRight_svg_attributes = new DrupalAttribute([
  ['class', ['icon', 'icon-tabler', 'tabler-icon', 'tabler-icon-arrow-narrow-right']],
  ['xmlns', 'http://www.w3.org/2000/svg'],
  ['width', 24],
  ['height', 24],
  ['viewBox', '0 0 24 24'],
  ['fill', 'none'],
  ['stroke', 'currentColor'],
  ['stroke-width', 2],
  ['stroke-linecap', 'round'],
  ['stroke-linejoin', 'round'],
]);

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
    attributes: new DrupalAttribute(),
    iconLeft: true,
    iconRight: false,
  },
  name: 'Button',
};

export const PrimaryAction: StoryObj<typeof meta> = {
  args: {
    appearance: 'primary-action-button',
    children: 'Label',
    attributes: new DrupalAttribute(),
  },
  name: 'PrimaryAction',
};

export const SecondaryAction: StoryObj<typeof meta> = {
  args: {
    appearance: 'secondary-action-button',
    children: 'Label',
    attributes: new DrupalAttribute(),
  },
  name: 'SecondaryAction',
};

export const Subtle: StoryObj<typeof meta> = {
  args: {
    appearance: 'subtle',
    children: 'Label',
    attributes: new DrupalAttribute(),
  },
  name: 'Subtle',
};

export const IconLeft: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
    iconLeft: 'true',
    attributes: new DrupalAttribute(),
    svg_attributes: iconLeft_svg_attributes,
  },
  name: 'IconLeft',
};

export const IconRight: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
    iconRight: 'true',
    attributes: new DrupalAttribute(),
    svg_attributes: iconRight_svg_attributes,
  },
  name: 'IconRight',
};

export const IconOnly: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
    iconOnly: 'true',
    attributes: new DrupalAttribute(),
    svg_attributes: iconLeft_svg_attributes,
  },
  name: 'IconOnly',
};
