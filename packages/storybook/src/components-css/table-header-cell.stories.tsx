import reactMeta from '../components-react/table-header-cell.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Table/Table Header Cell',
  id: 'css-table-header-cell',
};

export { Default } from '../components-react/table-header-cell.stories';
