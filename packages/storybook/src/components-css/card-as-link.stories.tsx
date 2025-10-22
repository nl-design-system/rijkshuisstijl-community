import reactMeta from '../components-react/card-as-link.stories';
import * as ReactStories from '../components-react/card-as-link.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Card as Link',
  id: 'css-card-as-link',
};

export const Default = ReactStories.Default;
export const FullBleed = ReactStories.FullBleed;
export const Horizontal = ReactStories.Horizontal;
