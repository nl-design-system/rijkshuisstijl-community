import { Listbox, ListboxOption } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Listbox/Listbox Option',
  id: 'rhc-listbox-option',
  component: ListboxOption,
  args: {
    children: 'Option #1',
    disabled: false,
    'aria-label': 'Listbox option example',
  },
  parameters: {
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Listbox.tsx',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht met styling van de Rijkshuisstijl Community.',
  },
  render: (args) => (
    <Listbox>
      <ListboxOption {...args} />
    </Listbox>
  ),
} as Meta<typeof ListboxOption>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};

export const ListboxItemSelected: Story = {
  args: {
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
};

export const Active: Story = {
  parameters: {
    pseudo: { active: true },
  },
};

export const Focus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
};

export const FocusVisible: Story = {
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const SelectedHover: Story = {
  args: {
    selected: true,
  },
  parameters: {
    pseudo: { hover: true },
  },
};
