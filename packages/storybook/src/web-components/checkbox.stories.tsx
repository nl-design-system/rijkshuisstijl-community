import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { CheckboxWebComponent } from '@rijkshuisstijl-community/web-components';
import { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';
import readme from '../components-react/checkbox.md?raw';

CheckboxWebComponent.define();

const CheckboxWrapper = ({
  appearance,
  disabled,
  indeterminate,
  inputrequired,
  invalid,
  required,
  classname,
  checked,
  ...restProps
}: any) => {
  return createElement('rhc-checkbox', {
    appearance,
    disabled: disabled?.toString(),
    indeterminate: indeterminate?.toString(),
    inputrequired: inputrequired?.toString(),
    invalid: invalid?.toString(),
    required: required?.toString(),
    classname,
    checked: checked?.toString(),
    ...restProps,
  });
};

const meta = {
  title: 'Checkbox',
  id: 'rhc-checkbox-web',
  component: CheckboxWrapper,
  parameters: {
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=944-1535&node-type=canvas&t=HiNKOQhf1hQtLZrr-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/Checkbox.tsx',
    nldesignsystem: 'https://www.nldesignsystem.nl/checkbox/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
  },
  argTypes: {
    checked: {
      name: 'checked',
      type: { name: 'boolean', required: false },
    },
    onChange: {
      name: 'onChange',
      type: { name: 'function', required: false },
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
    },
    'aria-label': {
      name: 'aria-label',
      type: { name: 'string', required: true },
    },
  },
  args: {
    'aria-label': 'checkbox-label',
    id: 'checkbox',
  },
} as Meta<typeof CheckboxWebComponent>;

export default meta;

export const Default = {} as StoryObj<typeof meta>;

export const Active = {
  parameters: {
    pseudo: {
      active: '#checkbox',
    },
  },
} as StoryObj<typeof meta>;

export const Hover = {
  parameters: {
    pseudo: { hover: '#checkbox' },
  },
} as StoryObj<typeof meta>;

export const Focus = {
  parameters: {
    pseudo: { focus: '#checkbox' },
  },
} as StoryObj<typeof meta>;

export const FocusVisible = {
  parameters: {
    pseudo: { focusVisible: '#checkbox' },
  },
} as StoryObj<typeof meta>;

export const Disabled = {
  args: {
    disabled: true,
  },
} as StoryObj<typeof meta>;

export const Invalid = {
  args: {
    invalid: true,
  },
} as StoryObj<typeof meta>;

export const Checked = {
  args: {
    checked: true,
    onChange: () => {},
  },
} as StoryObj<typeof meta>;

export const CheckedAndActive = {
  args: {
    checked: true,
    onChange: () => {},
  },
  parameters: {
    pseudo: { active: '#checkbox' },
  },
} as StoryObj<typeof meta>;

export const CheckedAndHover = {
  args: {
    checked: true,
    onChange: () => {},
  },
  parameters: {
    pseudo: { hover: '#checkbox' },
  },
} as StoryObj<typeof meta>;

export const CheckedAndFocus = {
  args: {
    checked: true,
    onChange: () => {},
  },
  parameters: {
    pseudo: { focus: true },
  },
} as StoryObj<typeof meta>;

export const CheckedAndFocusVisible = {
  args: {
    checked: true,
    onChange: () => {},
  },
  parameters: {
    pseudo: { focusVisible: '#checkbox' },
    controls: { exclude: ['appearance'] },
  },
} as StoryObj<typeof meta>;

export const CheckedAndDisabled = {
  args: {
    checked: true,
    onChange: () => {},
    disabled: true,
  },
} as StoryObj<typeof meta>;

export const Indeterminate = {
  args: {
    indeterminate: true,
  },
} as StoryObj<typeof meta>;

export const IndeterminateAndActive = {
  args: {
    indeterminate: true,
  },
  parameters: {
    pseudo: { active: '#checkbox' },
  },
} as StoryObj<typeof meta>;

export const IndeterminateAndHover = {
  args: {
    indeterminate: true,
  },
  parameters: {
    pseudo: { hover: '#checkbox' },
  },
} as StoryObj<typeof meta>;

export const IndeterminateAndFocus = {
  args: {
    indeterminate: true,
  },
  parameters: {
    pseudo: { focus: '#checkbox' },
  },
} as StoryObj<typeof meta>;

export const IndeterminateAndFocusVisible = {
  args: {
    indeterminate: true,
  },
  parameters: {
    pseudo: { focusVisible: '#checkbox', focus: '#checkbox' },
  },
} as StoryObj<typeof meta>;

export const IndeterminateAndDisabled = {
  args: {
    indeterminate: true,
    disabled: true,
  },
} as StoryObj<typeof meta>;
