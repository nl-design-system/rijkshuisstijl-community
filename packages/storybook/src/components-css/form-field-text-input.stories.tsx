import reactMeta from '../components-react/form-field-text-input.stories';
import * as ReactStories from '../components-react/form-field-text-input.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Form Field/Form Field Text Input',
  id: 'css-form-field-text-input',
};

export const Default = ReactStories.Default;
export const Description = ReactStories.Description;
export const ErrorMessage = ReactStories.ErrorMessage;
export const Status = ReactStories.Status;
export const Password = ReactStories.Password;
export const Disabled = ReactStories.Disabled;
export const ReadOnly = ReactStories.ReadOnly;
export const Required = ReactStories.Required;
export const InputRequired = ReactStories.InputRequired;
export const Placeholder = ReactStories.Placeholder;
export const LeftToRightInput = ReactStories.LeftToRightInput;
