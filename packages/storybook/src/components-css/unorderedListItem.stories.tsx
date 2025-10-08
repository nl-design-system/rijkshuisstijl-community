import reactMeta from '../components-react/unorderedListItem.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Unordered List/Unordered List Item',
  id: 'css-unordered-list-item',
};

export { DefaultUnorderedListItem } from '../components-react/unorderedListItem.stories';
