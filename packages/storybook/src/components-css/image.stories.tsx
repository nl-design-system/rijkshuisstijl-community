import reactMeta from '../components-react/image.stories';
import * as ReactStories from '../components-react/image.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Image',
  id: 'css-image',
};

export const Default = ReactStories.Default;
export const Decorative = ReactStories.Decorative;
