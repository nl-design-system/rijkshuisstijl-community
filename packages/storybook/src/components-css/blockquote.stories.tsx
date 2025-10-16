import reactMeta from '../components-react/blockquote.stories';
import * as ReactStories from '../components-react/blockquote.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Blockquote',
  id: 'css-blockquote',
};

export const Default = ReactStories.Default;
export const Attribution = ReactStories.Attribution;
