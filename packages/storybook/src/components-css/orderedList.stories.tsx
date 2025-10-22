import reactMeta from '../components-react/orderedList.stories';
import * as ReactStories from '../components-react/orderedList.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Ordered List',
  id: 'css-ordered-list',
};

export const DefaultOrderedList = ReactStories.DefaultOrderedList;
export const NestedOrderedList = ReactStories.NestedOrderedList;
