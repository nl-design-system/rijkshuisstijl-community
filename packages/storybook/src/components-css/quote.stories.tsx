import reactMeta from '../components-react/quote.stories';
import * as ReactStories from '../components-react/quote.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Quote',
  id: 'css-quote',
};

export const Default = ReactStories.Default;
export const ZonderKop = ReactStories.ZonderKop;
