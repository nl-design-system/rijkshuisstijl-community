import reactMeta from '../components-react/form-field-select.stories';
import * as ReactStories from '../components-react/form-field-select.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Form Field/Form Field Select',
  id: 'css-form-field-select',
};

export const Default = ReactStories.Default;
export const CustomOptions = ReactStories.CustomOptions;
export const Description = ReactStories.Description;
export const Required = ReactStories.Required;
export const Disabled = ReactStories.Disabled;
export const Invalid = ReactStories.Invalid;
export const RightToLeft = ReactStories.RightToLeft;
