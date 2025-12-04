import reactMeta from '../components-react/breadcrumb-nav.stories';
import * as ReactStories from '../components-react/breadcrumb-nav.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Breadcrumb Navigation',
  id: 'css-breadcrumb-nav',
};

export const Default = ReactStories.Default;
export const Current = ReactStories.Current;
export const Separator = ReactStories.Separator;
export const Active = ReactStories.Active;
export const DisabledAndCurrent = ReactStories.DisabledAndCurrent;
