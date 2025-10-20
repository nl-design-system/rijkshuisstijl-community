import reactMeta from '../components-react/unorderedList.stories';
import * as ReactStories from '../components-react/unorderedList.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Unordered List',
  id: 'css-unordered-list',
};

export const DefaultUnorderedList = ReactStories.DefaultUnorderedList;
export const NestedUnorderedList = ReactStories.NestedUnorderedList;
