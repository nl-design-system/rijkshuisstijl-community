import reactMeta from '../components-react/paragraph.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Paragraph',
  id: 'css-paragraph',
};

export { Default, Lead } from '../components-react/paragraph.stories';
