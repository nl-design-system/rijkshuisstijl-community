import { Meta, StoryObj } from '@storybook/angular';
import { DetailinformatieTemplate } from './detailinformatie/detailinformatie.component';

const meta: Meta = {
  title: 'Detailinformatie',
  id: 'rhc-templates-detailinformatie',
  render: () => ({
    moduleMetadata: {
      imports: [DetailinformatieTemplate],
    },
    template: `
    <detailinformatie-template></detailinformatie-template>
    `,
  }),
  parameters: {
    docs: {
      page: null,
    },
    isPage: true,
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj = {};
