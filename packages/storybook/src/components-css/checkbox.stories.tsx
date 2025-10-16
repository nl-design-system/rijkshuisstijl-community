import reactMeta from '../components-react/checkbox.stories';
import * as ReactStories from '../components-react/checkbox.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Checkbox',
  id: 'css-checkbox',
};

export const Default = ReactStories.Default;
export const Active = ReactStories.Active;
export const Hover = ReactStories.Hover;
export const Focus = ReactStories.Focus;
export const FocusVisible = ReactStories.FocusVisible;
export const Disabled = ReactStories.Disabled;
export const Invalid = ReactStories.Invalid;
export const Checked = ReactStories.Checked;
export const CheckedAndActive = ReactStories.CheckedAndActive;
export const CheckedAndHover = ReactStories.CheckedAndHover;
export const CheckedAndFocus = ReactStories.CheckedAndFocus;
export const CheckedAndFocusVisible = ReactStories.CheckedAndFocusVisible;
export const CheckedAndDisabled = ReactStories.CheckedAndDisabled;
export const Indeterminate = ReactStories.Indeterminate;
export const IndeterminateAndActive = ReactStories.IndeterminateAndActive;
export const IndeterminateAndHover = ReactStories.IndeterminateAndHover;
export const IndeterminateAndFocus = ReactStories.IndeterminateAndFocus;
export const IndeterminateAndFocusVisible = ReactStories.IndeterminateAndFocusVisible;
export const IndeterminateAndDisabled = ReactStories.IndeterminateAndDisabled;
