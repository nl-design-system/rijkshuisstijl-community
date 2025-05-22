import type { Meta, StoryObj } from '@storybook/angular';
import { appearanceOptions, ParagraphComponent } from '../../../components-angular/src/public-api';

const meta: Meta<ParagraphComponent> = {
  title: 'Rijkshuisstijl-angular/Paragraph',
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
  name: 'Lead',
};
