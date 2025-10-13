/* @license CC0-1.0 */

import { ExpandableCheckboxGroup, ExpandableCheckboxGroupProps } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/internal-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PropsWithChildren, useEffect } from 'react';
import readme from './expandable-checkbox-group.md?raw';

const ExpandableCheckboxGroupStory = (props: PropsWithChildren<ExpandableCheckboxGroupProps>) => (
  <ExpandableCheckboxGroup {...props} />
);

const meta = {
  title: 'Expandable Checkbox Group',
  id: 'rhc-expandable-checkbox-group',
  component: ExpandableCheckboxGroupStory,
  argTypes: {
    children: {},
  },

  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/ExpandableCheckboxGroup.tsx',
  },
  render: ExpandableCheckboxGroupStory,
} as Meta<typeof ExpandableCheckboxGroupStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    legend: 'Framework',
    maxVisible: 3,
    options: [
      { value: 'value', label: 'React' },
      { value: 'value2', label: 'CSS' },
      { value: 'value3', label: 'Angular' },
      { value: 'value4', label: 'Web Component' },
      { value: 'value5', label: 'Vue' },
    ],
    selectedOptions: [],
  },
};

export const Open: Story = {
  args: {
    legend: 'Framework',
    maxVisible: 3,
    options: [
      { value: 'value', label: 'React' },
      { value: 'value2', label: 'CSS' },
      { value: 'value3', label: 'Angular' },
      { value: 'value4', label: 'Web Component' },
      { value: 'value5', label: 'Vue' },
    ],
    selectedOptions: [],
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        // Force open the details element after render
        const details = document.querySelector('#open-story .rhc-expandable-checkbox-group__details');
        if (details) {
          (details as HTMLDetailsElement).open = true;
        }
      });

      return (
        <div id="open-story">
          <Story />
        </div>
      );
    },
  ],
};
