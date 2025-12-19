import reactMeta from '../components-react/form-field.stories';
import * as ReactStories from '../components-react/form-field.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Form Field/Form Field',
  id: 'css-form-field',
};

export const Default = ReactStories.Default;
export const WithRadioGroup = ReactStories.WithRadioGroup;
export const Invalid = ReactStories.Invalid;
