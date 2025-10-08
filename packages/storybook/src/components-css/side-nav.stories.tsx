import reactMeta from '../components-react/side-nav.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Side Navigation',
  id: 'css-side-nav',
};

export { Default } from '../components-react/side-nav.stories';
