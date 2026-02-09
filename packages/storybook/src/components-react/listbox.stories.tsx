import { Listbox, ListboxOption } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Listbox',
  id: 'rhc-listbox',
  component: Listbox,
  args: {
    children: 'Label',
    disabled: false,
    'aria-label': 'Listbox example',
  },
  parameters: {
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

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <ListboxOption>Option #1</ListboxOption>
        <ListboxOption>Option #2</ListboxOption>
        <ListboxOption>Option #3</ListboxOption>
      </>
    ),
  },
};

export const WithLongText: Story = {
  args: {
    children: (
      <>
        <ListboxOption>
          This is a very long option that is meant to test how the Listbox component handles overflow and text wrapping
          within its options.
        </ListboxOption>
        <ListboxOption>
          Another lengthy option to further evaluate the component&apos;s ability to manage extended text content
          without breaking the layout or usability.
        </ListboxOption>
        <ListboxOption>Short Option</ListboxOption>
      </>
    ),
  },
};
