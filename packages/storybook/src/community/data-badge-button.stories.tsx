/* @license CC0-1.0 */

import { DataBadgeButton } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import { PropsWithChildren } from 'react';
import readme from './data-badge-button.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

interface DataBadgeButtonStoryProps {
  pressed?: boolean;
  helperText?: string;
  showHelperText?: boolean;
  helperId?: string;
}

const DataBadgeButtonStory = ({
  children,
  pressed,
  helperText,
  showHelperText,
  helperId,
  ...props
}: PropsWithChildren<DataBadgeButtonStoryProps>) => (
  <DataBadgeButton
    helperId={helperId}
    helperText={helperText}
    pressed={pressed}
    showHelperText={showHelperText}
    {...props}
  >
    {children}
  </DataBadgeButton>
);

const meta = {
  title: 'Rijkshuisstijl/DataBadgeButton',
  id: 'rhc-data-badge-button',
  component: DataBadgeButtonStory,
  argTypes: {
    children: {
      description: 'Button text content',
      type: {
        name: 'string',
        required: true,
      },
      table: {
        category: 'Content',
      },
      defaultValue: 'Label',
    },
    pressed: {
      description: 'Whether the button is pressed/active',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Props',
      },
      defaultValue: false,
    },
    helperText: {
      description: 'Accessible helper text for screen readers',
      type: {
        name: 'string',
      },
      table: {
        category: 'Accessibility',
      },
    },
    showHelperText: {
      description: 'Whether to show the helper text',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Accessibility',
      },
      defaultValue: false,
    },
    helperId: {
      description: 'ID for the helper text element',
      type: {
        name: 'string',
      },
      table: {
        category: 'Accessibility',
      },
    },
  },
  args: {
    children: 'Filter Label',
    pressed: false,
    showHelperText: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/DataBadgeButton.tsx',
  },
  render: DataBadgeButtonStory,
} as Meta<typeof DataBadgeButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Filter Label',
  },
};

export const Pressed: Story = {
  args: {
    children: 'Active Filter',
    pressed: true,
  },
};

export const WithHelperText: Story = {
  args: {
    children: 'Category',
    helperText: 'Click to filter by category',
    showHelperText: true,
    helperId: 'category-helper',
  },
};

export const MultipleButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <DataBadgeButton>All Items</DataBadgeButton>
      <DataBadgeButton pressed>Documents</DataBadgeButton>
      <DataBadgeButton>Images</DataBadgeButton>
      <DataBadgeButton>Videos</DataBadgeButton>
      <DataBadgeButton helperId="recent-helper" helperText="Filter by recent uploads" showHelperText={true}>
        Recent
      </DataBadgeButton>
    </div>
  ),
};
