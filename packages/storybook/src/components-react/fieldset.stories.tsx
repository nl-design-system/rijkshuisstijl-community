/* @license CC0-1.0 */

import { Fieldset, FormFieldTextInput } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './fieldset.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Fieldset',
  id: 'rhc-fieldset',
  component: Fieldset,
  args: {
    disabled: false,
    invalid: false,
    legend: 'Legend',
  },
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=16708-112&p=f&t=eVuza9JCLr8AObbU-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Fieldset.tsx',
    nldesignsystem: 'https://nldesignsystem.nl/fieldset',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met alleen overgeschreven design tokens van de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof Fieldset>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    disabled: false,
    invalid: false,
    legend: 'Legend',
    children: (
      <>
        <FormFieldTextInput label="Field A" />
        <FormFieldTextInput label="Field B" />
        <FormFieldTextInput label="Field C" />
      </>
    ),
  },
  render: (args) => (
    <Fieldset disabled={args.disabled} legend={args.legend}>
      <FormFieldTextInput disabled={args.disabled} invalid={args.invalid} label="Field A" />
      <FormFieldTextInput disabled={args.disabled} invalid={args.invalid} label="Field B" />
      <FormFieldTextInput disabled={args.disabled} invalid={args.invalid} label="Field C" />
    </Fieldset>
  ),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    children: (
      <>
        <FormFieldTextInput disabled label="Field A" />
        <FormFieldTextInput disabled label="Field B" />
        <FormFieldTextInput disabled label="Field C" />
      </>
    ),
  },
  name: 'Invalid',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-form-fieldset__legend--disabled` class names.',
      },
    },
  },
};

export const PartiallyDisabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    children: (
      <>
        <FormFieldTextInput disabled label="Field A" />
        <FormFieldTextInput label="Field B" />
        <FormFieldTextInput label="Field C" />
      </>
    ),
  },
  name: 'Partially Invalid',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-form-fieldset__legend--disabled` class names.',
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    invalid: true,
    children: (
      <>
        <FormFieldTextInput invalid label="Field A" />
        <FormFieldTextInput invalid label="Field B" />
        <FormFieldTextInput invalid label="Field C" />
      </>
    ),
  },
  name: 'Invalid',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-form-fieldset__legend--invalid` class names.',
      },
    },
  },
};

export const PartiallyInvalid: Story = {
  args: {
    ...Default.args,
    invalid: true,
    children: (
      <>
        <FormFieldTextInput invalid label="Field A" />
        <FormFieldTextInput label="Field B" />
        <FormFieldTextInput label="Field C" />
      </>
    ),
  },
  name: 'Partially Invalid',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-form-fieldset__legend--invalid` class names.',
      },
    },
  },
};
