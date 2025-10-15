import reactMeta from '../components-react/text-input.stories';
import * as ReactStories from '../components-react/text-input.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Text Input',
  id: 'css-text-input',
};

export const Default = ReactStories.Default;
export const Required = ReactStories.Required;
export const InputRequired = ReactStories.InputRequired;
export const Disabled = ReactStories.Disabled;
export const ReadOnly = ReactStories.ReadOnly;
export const Invalid = ReactStories.Invalid;
export const Placeholder = ReactStories.Placeholder;
export const AutoComplete = ReactStories.AutoComplete;
export const LeftToRightInput = ReactStories.LeftToRightInput;
