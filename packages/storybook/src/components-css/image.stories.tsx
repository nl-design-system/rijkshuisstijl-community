import reactMeta from '../components-react/image.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Image',
  id: 'css-image',
};

export { Default, Decorative } from '../components-react/image.stories';
