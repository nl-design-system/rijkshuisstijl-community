import reactMeta from '../components-react/radio.stories';
import * as ReactStories from '../components-react/radio.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Radio Button',
  id: 'css-radio',
};

export const Default = ReactStories.Default;
export const Active = ReactStories.Active;
export const Hover = ReactStories.Hover;
export const Focus = ReactStories.Focus;
export const FocusVisible = ReactStories.FocusVisible;
export const Disabled = ReactStories.Disabled;
export const Invalid = ReactStories.Invalid;
