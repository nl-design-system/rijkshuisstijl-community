import reactMeta from '../components-react/side-nav-link.stories';
import * as ReactStories from '../components-react/side-nav-link.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Side Navigation/Side Navigation Link',
  id: 'css-side-nav-link',
};

export const Default = ReactStories.Default;
export const Hover = ReactStories.Hover;
export const Focus = ReactStories.Focus;
export const FocusVisible = ReactStories.FocusVisible;
export const Active = ReactStories.Active;
export const Current = ReactStories.Current;
export const CurrentAndHover = ReactStories.CurrentAndHover;
export const CurrentAndActive = ReactStories.CurrentAndActive;
export const CurrentAndFocus = ReactStories.CurrentAndFocus;
export const CurrentAndFocusVisible = ReactStories.CurrentAndFocusVisible;
export const WithoutIcon = ReactStories.WithoutIcon;
