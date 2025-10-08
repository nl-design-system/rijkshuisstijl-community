import reactMeta from '../components-react/card-as-link.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Card as Link',
  id: 'css-card-as-link',
};

export { Default, FullBleed, Horizontal } from '../components-react/card-as-link.stories';
