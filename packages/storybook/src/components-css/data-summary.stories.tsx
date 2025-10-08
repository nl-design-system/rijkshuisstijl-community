import reactMeta from '../components-react/data-summary.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Data Summary',
  id: 'css-data-summary',
};

export { Default, Rows, NoActions, NoActionsColumn } from '../components-react/data-summary.stories';
