import type { Meta, StoryObj } from '@storybook/angular';
import readme from './image.md';
import { ImageComponent } from '../../../components-angular/src/public-api';

type StoryType = ImageComponent & { src: string; alt: string; width: number; height: number };

const meta: Meta<StoryType> = {
  title: 'Image',
  id: 'rhc-angular-image',
  component: ImageComponent,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  argTypes: {
    src: {
      description: 'Image source',
      control: { type: 'text' },
      required: true,
    },
    alt: {
      description: 'Image alt text',
      control: { type: 'text' },
      required: true,
    },
    width: {
      description: 'Image width',
      control: { type: 'number' },
      required: true,
    },
    height: {
      description: 'Image height',
      control: { type: 'number' },
      required: true,
    },
  },
  args: {
    src: './placeholder.jpg',
    alt: 'Multicolored tulip field',
    width: 640,
    height: 763,
  },
  render: ({ src, alt, width, height }) => ({
    template: `<img rhc-image src="${src}" alt="${alt}" width="${width}" height="${height}" />`,
  }),
};

export default meta;

export const Default: StoryObj<ImageComponent> = {};
