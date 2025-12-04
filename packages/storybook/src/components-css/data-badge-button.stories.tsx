import reactMeta from '../components-react/data-badge-button.stories';
import * as ReactStories from '../components-react/data-badge-button.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Data Badge Button',
  id: 'css-data-badge-button',
};

export const Default = ReactStories.Default;
export const MultipleButtons = ReactStories.MultipleButtons;
export const WithIconAfter = ReactStories.WithIconAfter;
export const WithIconBefore = ReactStories.WithIconBefore;
export const WithHelperText = ReactStories.WithHelperText;
export const FocusVisible = ReactStories.FocusVisible;
export const Hover = ReactStories.Hover;
