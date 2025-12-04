import { Meta, StoryObj } from '@storybook/angular';
import { BoeteZoekenTemplate } from './boete-zoeken/boete-zoeken.component';

const meta: Meta = {
  title: 'Boete zoeken',
  id: 'rhc-templates-boete-zoeken',
  render: () => ({
    moduleMetadata: {
      imports: [BoeteZoekenTemplate],
    },
    template: `
    <boete-zoeken-template></boete-zoeken-template>
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
