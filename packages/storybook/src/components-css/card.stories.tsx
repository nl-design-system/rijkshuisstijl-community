import reactMeta from '../components-react/card.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Card',
  id: 'css-card',
};

export { Default } from '../components-react/card.stories';
