import { HeadingComponent } from '@rijkshuisstijl-community/components-angular';
import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<HeadingComponent> = {
  title: 'Example/Heading',
  component: HeadingComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<HeadingComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args: HeadingComponent) => ({
    props: args,
    template: `<lib-heading>Test</lib-heading>`,
  }),
};
