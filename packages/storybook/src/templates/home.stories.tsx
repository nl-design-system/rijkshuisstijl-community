import type { Meta, StoryObj } from '@storybook/react/*';
import Home from './home';

const meta: Meta = {
  title: 'Templates/Home',
  component: Home,
  parameters: {},
};
export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {};
