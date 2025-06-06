import type { Meta, StoryObj } from '@storybook/angular';
import readme from './icon.md';
import { IconComponent, NlFlagComponent } from '../../../components-angular/src/public-api';

const meta: Meta<IconComponent> = {
  title: 'Rijkshuisstijl/Icon',
  id: 'rhc-angular-icon',
  component: IconComponent,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  argTypes: {
    icon: {
      description: 'Icon name from Tabler Icons',
      control: { type: 'select' },
      options: [...IconComponent.iconSetKeys()],
    },
  },
  args: {
    icon: 'home',
  },
  render: ({ icon }) => ({
    template: `
      <rhc-icon icon='${icon}' />
    `,
  }),
};

export default meta;

export const Home: StoryObj<IconComponent> = {
  args: {
    icon: 'home',
  },
};

export const CustomIcon: StoryObj<IconComponent> = {
  args: {},
  render: () => ({
    template: `
           <rhc-icon>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
              </svg>
           </rhc-icon>
        `,
  }),
  name: 'Custom Icon',
};

export const Flag: StoryObj<IconComponent> = {
  args: {},
  render: () => ({
    template: `
         <rhc-icon>
            <rhc-nl-flag />
         </rhc-icon>
      `,
    moduleMetadata: {
      imports: [NlFlagComponent],
    },
  }),
  name: 'Flag',
};
