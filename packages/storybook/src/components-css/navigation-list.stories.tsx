import reactMeta from '../components-react/navigation-list.stories';
import * as ReactStories from '../components-react/navigation-list.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Navigation List',
  id: 'css-navigation-list',
};

export const Default = ReactStories.Default;
export const SmallContainer = ReactStories.SmallContainer;
