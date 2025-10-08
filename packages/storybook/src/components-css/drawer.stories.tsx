import reactMeta from '../components-react/drawer.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Drawer',
  id: 'css-drawer',
};

export { Default, InlineStart, InlineEnd, BlockStart, BlockEnd, OverflowY } from '../components-react/drawer.stories';
