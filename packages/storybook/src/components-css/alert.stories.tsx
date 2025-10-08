import reactMeta from '../components-react/alert.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Alert',
  id: 'css-alert',
};

export { Informative, Negative, Positive, Warning } from '../components-react/alert.stories';
