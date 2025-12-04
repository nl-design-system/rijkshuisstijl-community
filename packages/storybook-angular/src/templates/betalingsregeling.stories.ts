import { Meta, StoryObj } from '@storybook/angular';
import { BetalingsregelingTemplate } from './betalingsregeling/betalingsregeling.component';

const meta: Meta = {
  title: 'Betalingsregeling',
  id: 'rhc-templates-betalingsregeling',
  render: () => ({
    moduleMetadata: {
      imports: [BetalingsregelingTemplate],
    },
    template: `
    <betalingsregeling-template></betalingsregeling-template>
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
