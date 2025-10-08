import reactMeta from '../components-react/blockquote.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Blockquote',
  id: 'css-blockquote',
};

export { Default, Attribution } from '../components-react/blockquote.stories';
