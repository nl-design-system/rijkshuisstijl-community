/* @license CC0-1.0 */

import TwigInput from '@rijkshuisstijl-community/components-twig/src/partials/Input.twig';
import type { Meta, StoryObj } from '@storybook/react';
import DrupalAttribute from 'drupal-attribute';
import readme from './input-twig.readme.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Twig Components/Form/Partials/Input',
  id: 'rhc-twig-input',
  component: TwigInput,
  argTypes: {
    id: {
      description: 'The id of the input element',
      type: 'string',
    },
    name: {
      description: 'The name of the input element',
      type: 'string',
    },
    type: {
      description: 'The type of the input element, e.g. checkbox, input, radio',
      control: { type: 'select' },
      options: ['file', 'text', 'password', 'email', 'telephone', 'radio', 'checkbox', 'date'],
    },
    required: {
      description: 'Flag indicating requirement',
      control: { type: 'boolean' },
      type: 'boolean',
    },
    disabled: {
      description: 'Flag indicating if the element is disabled',
      control: { type: 'boolean' },
      type: 'boolean',
    },
    value: {
      description: 'The value of the input element',
      type: 'string',
    },
    pattern: {
      description: 'Validation pattern for phone numbers',
      type: 'string',
    },
  },
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof TwigInput>;

export default meta;

export const TwigInputText: StoryObj<typeof TwigInput> = {
  args: {
    attributes: new DrupalAttribute([
      ['class', ['utrecht-textbox', 'utrecht-textbox--html-input']],
      ['dir', 'auto'],
    ]),
    id: 'my-text-input',
    name: 'input-text-element',
    type: 'text',
    required: 'false',
  },
  name: 'Input: Text',
};

export const TwigInputRadio: StoryObj<typeof TwigInput> = {
  args: {
    attributes: new DrupalAttribute([['class', ['utrecht-radio-button', 'utrecht-radio-button--html-input']]]),
    id: 'my-radio-input',
    name: 'radio-option',
    type: 'radio',
    required: 'false',
    value: 'value',
  },
  name: 'Input: Radio',
};

export const TwigInputCheckbox: StoryObj<typeof TwigInput> = {
  args: {
    attributes: new DrupalAttribute([
      [
        'class',
        ['utrecht-checkbox', 'utrecht-checkbox--html-input', 'utrecht-checkbox--custom', 'utrecht-form-field__input'],
      ],
    ]),
    id: 'my-checkbox',
    name: 'checkbox-option',
    type: 'checkbox',
    required: 'false',
    value: 'value',
  },
  name: 'Input: Checkbox',
};

export const TwigInputDate: StoryObj<typeof TwigInput> = {
  args: {
    attributes: new DrupalAttribute([['class', ['utrecht-textbox', 'utrecht-textbox--html-input']]]),
    id: 'my-date-input',
    name: 'my-date',
    type: 'date',
    required: 'false',
  },
  name: 'Input: Date',
};

export const TwigInputPassword: StoryObj<typeof TwigInput> = {
  args: {
    attributes: new DrupalAttribute([['class', ['utrecht-textbox', 'utrecht-textbox--html-input']]]),
    id: 'my-password-input',
    name: 'my-password',
    type: 'password',
    required: 'false',
  },
  name: 'Input: Password',
};

export const TwigInputEmail: StoryObj<typeof TwigInput> = {
  args: {
    attributes: new DrupalAttribute([['class', ['utrecht-textbox', 'utrecht-textbox--html-input']]]),
    id: 'my-email-input',
    name: 'my-email',
    type: 'email',
    required: 'false',
  },
  name: 'Input: Email',
};

export const TwigInputMobile: StoryObj<typeof TwigInput> = {
  args: {
    attributes: new DrupalAttribute([['class', ['utrecht-textbox', 'utrecht-textbox--html-input']]]),
    id: 'my-telephone-input',
    name: 'my-telephone',
    type: 'tel',
    pattern: '06-[0-9]{8}',
    required: 'false',
  },
  name: 'Input: Mobile phone number (NL)',
};

export const TwigInputTelephone: StoryObj<typeof TwigInput> = {
  args: {
    attributes: new DrupalAttribute([['class', ['utrecht-textbox', 'utrecht-textbox--html-input']]]),
    id: 'my-telephone-input',
    name: 'my-telephone',
    type: 'tel',
    pattern: '[0-9]{10}',
    required: 'false',
  },
  name: 'Input: Telephone (NL)',
};
