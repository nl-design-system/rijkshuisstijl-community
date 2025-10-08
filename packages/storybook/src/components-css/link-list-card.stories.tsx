import reactMeta from '../components-react/link-list-card.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Link List Card',
  id: 'css-link-list-card',
};

export { Default } from '../components-react/link-list-card.stories';
