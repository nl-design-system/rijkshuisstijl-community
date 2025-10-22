/* @license CC0-1.0 */

import { DataBadgeButton } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/internal-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCheck } from '@tabler/icons-react';
import readme from './data-badge-button.md?raw';

const meta = {
  title: 'Data Badge Button',
  id: 'rhc-data-badge-button',
  component: DataBadgeButton,
  argTypes: {
    children: {
      description: 'Data Badge Button text content',
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
      description: 'Of de Data Badge Button pressed/actief is',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Props',
      },
      defaultValue: false,
    },
    icon: {
      description: 'Icon om in de Data Badge Button te plaatsen',
      control: false,
      table: {
        category: 'Props',
      },
    },
    iconAlign: {
      description: 'Icon positie - voor of na de tekst (alleen relevant wanneer Icon gebruikt wordt)',
      control: {
        type: 'select',
      },
      options: ['start', 'end'],
      table: {
        category: 'Props',
      },
    },
    helperText: {
      description: 'Toegankelijke helper tekst voor screen readers',
      type: {
        name: 'string',
      },
    },
  },
  args: {
    children: 'Filter Label',
    pressed: false,
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
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/DataBadgeButton.tsx',
  },
} as Meta<typeof DataBadgeButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Filter Label',
  },
};

export const WithIconBefore: Story = {
  args: {
    children: 'With Icon Before',
    pressed: true,
    icon: <IconCheck />,
    iconAlign: 'start',
  },
};

export const WithIconAfter: Story = {
  args: {
    children: 'With Icon After',
    pressed: true,
    icon: <IconCheck />,
    iconAlign: 'end',
  },
};

export const WithHelperText: Story = {
  args: {
    children: 'Category',
    helperText: 'Klik om te filteren op categorie',
  },
};

export const FocusVisible: Story = {
  args: {
    children: 'With Focus',
  },
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const Hover: Story = {
  args: {
    children: 'Hover State',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const MultipleButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <DataBadgeButton>All Items</DataBadgeButton>
      <DataBadgeButton>Videos </DataBadgeButton>
      <DataBadgeButton pressed icon={<IconCheck />}>
        Documents
      </DataBadgeButton>
      <DataBadgeButton>Images</DataBadgeButton>
      <DataBadgeButton helperText="Filter op recente uploads"></DataBadgeButton>
    </div>
  ),
};
