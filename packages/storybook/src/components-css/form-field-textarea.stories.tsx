import reactMeta from '../components-react/form-field-textarea.stories';
import * as ReactStories from '../components-react/form-field-textarea.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Form Field/Form Field Textarea',
  id: 'css-form-field-textarea',
};

export const Default = ReactStories.Default;
export const Description = ReactStories.Description;
export const ErrorMessage = ReactStories.ErrorMessage;
export const Status = ReactStories.Status;
export const Placeholder = ReactStories.Placeholder;
export const Value = ReactStories.Value;
export const RightToLeft = ReactStories.RightToLeft;
export const ReadOnly = ReactStories.ReadOnly;
export const Disabled = ReactStories.Disabled;
export const Required = ReactStories.Required;
export const InputRequired = ReactStories.InputRequired;
