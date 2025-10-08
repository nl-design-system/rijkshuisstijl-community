import reactMeta from '../components-react/unorderedList.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Unordered List',
  id: 'css-unordered-list',
};

export { DefaultUnorderedList, NestedUnorderedList } from '../components-react/unorderedList.stories';
