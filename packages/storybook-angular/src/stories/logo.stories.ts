import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { DutchMapIconComponent, IconComponent, LogoComponent } from '../../../components-angular/src/public-api';

const meta: Meta<LogoComponent> = {
  decorators: [
    moduleMetadata({
      imports: [DutchMapIconComponent, IconComponent],
    }),
  ],
  title: 'Rijkshuisstijl-angular/Logo',
  id: 'rhc-angular-logo',
  component: LogoComponent,
  argTypes: {
    organisation: {
      description: 'Organisation name',
      control: { type: 'text' },
      required: true,
    },
    subtitle: {
      description: 'Subtitle of the logo',
      control: { type: 'text' },
      required: false,
    },
  },
  args: {
    organisation: 'Voorbeeld organisatie',
    subtitle: 'Voorbeeld ondertitel',
  },
  render: ({ organisation, subtitle }) => ({
    template: `<figure rhc-logo [organisation]="'${organisation}'" ${subtitle ? `subtitle="'${subtitle}'"` : ''}>
    <rhc-icon><rhc-dutch-map-icon/></rhc-icon>
    </figure>`,
  }),
};

export default meta;

export const Default: StoryObj<LogoComponent> = {};

export const NoSubtitle: StoryObj<LogoComponent> = {
  args: {
    organisation: 'Voorbeeld organisatie',
    subtitle: null,
  },
};
