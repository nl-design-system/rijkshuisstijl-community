import type { Meta, StoryObj } from '@storybook/angular';
import readme from './paragraph.md';
import { appearanceOptions, ParagraphComponent } from '../../../components-angular/src/public-api';

const meta: Meta<ParagraphComponent> = {
  title: 'Paragraph',
  id: 'rhc-angular-paragraph',
  component: ParagraphComponent,
  argTypes: {
    appearance: {
      description: 'Paragraph appearance',
      options: appearanceOptions,
      control: { type: 'select' },
    },
  },
  args: {
    appearance: undefined,
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ appearance }) => ({
    template: `<rhc-paragraph [appearance]="'${appearance}'" >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </rhc-paragraph>`,
    props: {
      appearance,
    },
  }),
};

export default meta;

export const Default: StoryObj<ParagraphComponent> = {};
export const Lead: StoryObj<ParagraphComponent> = {
  args: {
    appearance: 'lead',
  },
};
