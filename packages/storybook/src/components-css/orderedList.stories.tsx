import reactMeta from '../components-react/orderedList.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Ordered List',
  id: 'css-ordered-list',
};

export { DefaultOrderedList, NestedOrderedList } from '../components-react/orderedList.stories';
