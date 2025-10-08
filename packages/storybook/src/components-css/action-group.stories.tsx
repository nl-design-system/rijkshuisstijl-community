import reactMeta from '../components-react/action-group.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Action Group',
  id: 'css-action-group',
};

export { Column, ColumnStretch, Row } from '../components-react/action-group.stories';
