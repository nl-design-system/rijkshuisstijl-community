/* @license CC0-1.0 */

import {
  Fieldset,
  FieldsetLegend,
  type FieldsetProps,
  FormFieldTextbox,
} from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { ReactNode } from 'react';
import readme from './fieldset.md?raw';

interface FieldsetStoryProps extends FieldsetProps {
  element?: string | 'div' | 'fieldset';
  legend?: ReactNode;
  legendId?: string;
  section?: boolean;
}

const FieldsetStory = ({
  children,
  legend,
  legendId,
  section,
  disabled,
  invalid,
  ...restProps
}: FieldsetStoryProps) => {
  return (
    <Fieldset
      className={clsx({
        'utrecht-form-fieldset--section': section,
      })}
      {...restProps}
    >
      {legend && (
        <FieldsetLegend
          id={legendId}
          className={clsx({
            'utrecht-form-fieldset__legend--disabled': disabled,
            'utrecht-form-fieldset__legend--invalid': invalid,
          })}
        >
          {legend}
        </FieldsetLegend>
      )}
      {children}
    </Fieldset>
  );
};

const meta = {
  title: 'Rijkshuisstijl/Fieldset',
  id: 'rhc-fieldset',
  component: FieldsetStory,
  args: {
    disabled: false,
    invalid: false,
    children: (
      <>
        <FormFieldTextbox label="Field A"></FormFieldTextbox>
        <FormFieldTextbox label="Field B"></FormFieldTextbox>
        <FormFieldTextbox label="Field C"></FormFieldTextbox>
      </>
    ),
    legend: 'Legend',
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: FieldsetStory,
} satisfies Meta<typeof FieldsetStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: `Markup using the \`<fieldset>\` and \`<legend>\` HTML elements, wrapped in \`<div>\` element to support full CSS styling. Styling via \`utrecht-form-fieldset\` class name.
  
  \`<fieldset>\` is preferred as markup, because the automatic labelling via \`<legend>\` is less likely to break than \`aria-labelledby\`, and when the CSS can not be loaded, the visual representation is still clear to the user.`,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  name: 'Disabled',
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
