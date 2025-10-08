import reactMeta from '../components-react/table-cell.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Table/Table Cell',
  id: 'css-table-cell',
};

export { Default } from '../components-react/table-cell.stories';
