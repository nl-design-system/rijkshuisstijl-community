import reactMeta from '../components-react/form-field-checkbox-group.stories';
import * as ReactStories from '../components-react/form-field-checkbox-group.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Form Field/Form Field Checkbox Group',
  id: 'css-form-field-checkbox-group',
};

export const Default = ReactStories.Default;
export const Error = ReactStories.Error;
export const Description = ReactStories.Description;
export const Status = ReactStories.Status;
export const RightToLeft = ReactStories.RightToLeft;
