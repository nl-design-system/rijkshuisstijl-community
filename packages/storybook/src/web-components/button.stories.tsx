import { ButtonWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/web-components';
import anatomyDocs from '@utrecht/components/button/docs/anatomy.nl.md?raw';
import htmlDocs from '@utrecht/components/button/docs/technology-html.nl.md?raw';
import visualDesignDocs from '@utrecht/components/button/docs/visual-design.nl.md?raw';
import wcagDocs from '@utrecht/components/button/docs/wcag.nl.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../community/hero.md?raw';

ButtonWebComponent.define();

const meta = {
  title: 'Web Components/Button',
  id: 'rhc-button-web',
  component: 'rhc-button',
  argTypes: {
    appearance: {
      description: 'Button appearance',
      control: { type: 'select' },
      options: ['', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
      table: {
        category: 'Attributes',
      },
      defaultValue: '',
    },
    disabled: {
      table: {
        category: 'Attributes',
      },
      defaultValue: false,
    },
    children: {
      description: 'Button text - Custom Elements',
      type: {
        name: 'string',
        required: true,
      },
      table: {
        category: 'Attributes',
      },
      defaultValue: '',
    },
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, anatomyDocs, visualDesignDocs, htmlDocs, wcagDocs]),
      },
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen (voor de IconButton) en styling van de Rijkshuisstijl Community.',
  },
} as Meta<typeof ButtonWebComponent>;

export default meta;

export const Default = {
  args: {
    children: 'Label',
  },
} as StoryObj<typeof meta>;

export const PrimaryAction = {
  args: {
    children: 'Label',
    appearance: 'primary-action-button',
  },
} as StoryObj<typeof meta>;

export const SecondaryAction = {
  args: {
    children: 'Label',
    appearance: 'secondary-action-button',
  },
} as StoryObj<typeof meta>;

export const Subtle = {
  args: {
    children: 'Label',
    appearance: 'subtle-button',
  },
} as StoryObj<typeof meta>;
