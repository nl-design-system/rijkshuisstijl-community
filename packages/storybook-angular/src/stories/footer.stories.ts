import { FooterComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<FooterComponent> = {
  title: 'Rijkshuisstijl-angular/Footer',
  id: 'rhc-angular-footer',
  component: FooterComponent,
  argTypes: {},
  args: {},
  render: () => ({
    template: `
      <footer rhc-footer
        background="primary-outlined"
        backtotop="true"
        heading="Footer Heading"
        [columns]="[
          {
            heading: 'Column 1',
            appearanceLevel: 3,
            items: [
              { href: 'https://www.google.com', label: 'Google' },
              { href: 'https://www.google.com', label: 'Google' },
              { href: 'https://www.google.com', label: 'Google' },
              { href: 'https://www.google.com', label: 'Google' },
              
            ]
          },
          {
            heading: 'Column 2',
            appearanceLevel: 3,
            items: [
              { href: 'https://nldesignsystem.nl/', label: 'Nl Design System' },
              { href: 'https://nldesignsystem.nl/', label: 'Nl Design System' },
              { href: 'https://nldesignsystem.nl/', label: 'Nl Design System' },
              { href: 'https://nldesignsystem.nl/', label: 'Nl Design System' },
            ]
          }
        ]"
        [subFooter]="{
          items: [
            { href: 'https://nldesignsystem.nl/', label: 'Nl Design System' }
          ]
        }"
      >
      </footer>
    `,
  }),
};

export default meta;

export const Default: StoryObj<FooterComponent> = {
  args: {},
};
