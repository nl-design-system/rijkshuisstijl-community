import { HeadingComponent } from '@rijkshuisstijl-community/components-angular';
import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<HeadingComponent> = {
  title: 'Example/Heading',
  component: HeadingComponent,
  tags: ['autodocs'],
  argTypes: {
    headingLevel: {
      control: {
        type: 'number',
        min: 1,
        max: 6,
        step: 1,
      },
    },
    appearanceLevel: {
      control: {
        type: 'number',
        min: 1,
        max: 6,
        step: 1,
      },
    },
  },
  args: {
    headingLevel: 3,
  },
};

export default meta;
type Story = StoryObj<HeadingComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `<div class="rhc-theme"><community-heading ${argsToTemplate(args)}>Test</community-heading></div>`,
  }),
};
