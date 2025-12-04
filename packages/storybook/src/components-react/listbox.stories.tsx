import { Listbox, ListboxOption } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Listbox',
  id: 'rhc-listbox',
  component: Listbox,
  args: {
    children: 'Label',
    disabled: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'STABLE',
    },
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Listbox.tsx',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht met styling van de Rijkshuisstijl Community.',
  },
} as Meta<typeof Listbox>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    children: (
      <>
        <ListboxOption>Option #1</ListboxOption>
        <ListboxOption>Option #2</ListboxOption>
        <ListboxOption>Option #3</ListboxOption>
      </>
    ),
  },
};
