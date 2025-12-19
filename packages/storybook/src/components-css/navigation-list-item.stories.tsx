import reactMeta from '../components-react/navigation-list-item.stories';
import * as ReactStories from '../components-react/navigation-list-item.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Navigation List/Navigation List Item',
  id: 'css-navigation-list-item',
};

export const Default = ReactStories.Default;
export const WithCustomIcon = ReactStories.WithCustomIcon;
export const WithCustomIconEnd = ReactStories.WithCustomIconEnd;
export const Hover = ReactStories.Hover;
export const Focus = ReactStories.Focus;
