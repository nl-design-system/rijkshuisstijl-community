import reactMeta from '../components-react/number-badge.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Number Badge',
  id: 'css-number-badge',
};

export { Default, WithValue } from '../components-react/number-badge.stories';
