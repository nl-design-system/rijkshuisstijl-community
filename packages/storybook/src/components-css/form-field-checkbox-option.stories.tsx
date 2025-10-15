import reactMeta from '../components-react/form-field-checkbox-option.stories';
import * as ReactStories from '../components-react/form-field-checkbox-option.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Form Field/Form Field Checkbox Option',
  id: 'css-form-field-checkbox-option',
};

export const Primary = ReactStories.Primary;
export const Disabled = ReactStories.Disabled;
export const Invalid = ReactStories.Invalid;
export const WithErrorMessage = ReactStories.WithErrorMessage;
export const WithDescription = ReactStories.WithDescription;
export const WithStatus = ReactStories.WithStatus;
export const InputDir = ReactStories.InputDir;
