import reactMeta from '../components-react/article.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Article',
  id: 'css-article',
};

export { Default } from '../components-react/article.stories';
