import reactMeta from '../components-react/orderedListItem.stories';
import * as ReactStories from '../components-react/orderedListItem.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Ordered List/Ordered List Item',
  id: 'css-ordered-list-item',
};

export const Default = ReactStories.Default;
