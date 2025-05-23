import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Templates/helloworld',
  id: 'rhc-angular-helloworld',
  render: () => ({
    template: `
    <p>Hallo wereld!</p>
    <p>Dit is een template story.</p>
    <p>Hier kan je een template story maken.</p>
    <p>Dit is een voorbeeld van een template story.</p>
    <p>Hier kan je een template story maken.</p>
    <p>Dit is een voorbeeld van een template story.</p>
    <p>Hier kan je een template story maken.</p>
    <p>Dit is een voorbeeld van een template story.</p>
    <p>Hier kan je een template story maken.</p>
    `,
  }),
};

export default meta;

export const Default: StoryObj = {};
