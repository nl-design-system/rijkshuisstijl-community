import reactMeta from '../components-react/skip-link.stories';
import * as ReactStories from '../components-react/skip-link.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Skip link',
  id: 'css-skip-link',
};

export const Default = ReactStories.Default;
export const RightToLeft = ReactStories.RightToLeft;
export const FocusVisible = ReactStories.FocusVisible;
