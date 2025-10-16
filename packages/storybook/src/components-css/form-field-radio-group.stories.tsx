import reactMeta from '../components-react/form-field-radio-group.stories';
import * as ReactStories from '../components-react/form-field-radio-group.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Form Field/Form Field Radio Group',
  id: 'css-form-field-radio-group',
};

export const Default = ReactStories.Default;
export const Invalid = ReactStories.Invalid;
export const Description = ReactStories.Description;
export const Status = ReactStories.Status;
export const RightToLeft = ReactStories.RightToLeft;
