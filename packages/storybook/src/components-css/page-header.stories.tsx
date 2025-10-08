import reactMeta from '../components-react/page-header.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Page Header',
  id: 'css-page-header',
};

export { Default } from '../components-react/page-header.stories';
