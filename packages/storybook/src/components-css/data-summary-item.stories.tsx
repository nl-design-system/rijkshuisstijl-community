import reactMeta from '../components-react/data-summary-item.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Data Summary Item',
  id: 'css-data-summary-item',
};

export { Default, Row } from '../components-react/data-summary-item.stories';
