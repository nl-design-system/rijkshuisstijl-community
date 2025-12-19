import reactMeta from '../components-react/textarea.stories';
import * as ReactStories from '../components-react/textarea.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Text Area',
  id: 'css-textarea',
};

export const Default = ReactStories.Default;
export const ReadOnly = ReactStories.ReadOnly;
export const Disabled = ReactStories.Disabled;
export const Required = ReactStories.Required;
export const InputRequired = ReactStories.InputRequired;
export const Invalid = ReactStories.Invalid;
export const Placeholder = ReactStories.Placeholder;
export const RightToLeft = ReactStories.RightToLeft;
