import reactMeta from '../components-react/separator.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Separator',
  id: 'css-separator',
};

export { Default, Invisible } from '../components-react/separator.stories';
