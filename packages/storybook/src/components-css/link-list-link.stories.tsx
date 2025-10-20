import reactMeta from '../components-react/link-list-link.stories';
import * as ReactStories from '../components-react/link-list-link.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Link List/Link List Link',
  id: 'css-link-list-link',
};

export const Default = ReactStories.Default;
export const NoIcon = ReactStories.NoIcon;
export const Hover = ReactStories.Hover;
export const Active = ReactStories.Active;
export const Focus = ReactStories.Focus;
export const Visited = ReactStories.Visited;
