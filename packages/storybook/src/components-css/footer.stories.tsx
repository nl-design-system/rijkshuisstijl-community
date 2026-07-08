import reactMeta from '../components-react/footer.stories';
import * as ReactStories from '../components-react/footer.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Footer',
  id: 'css-footer',
};

export const DefaultFooter = ReactStories.DefaultFooter;
export const CompactFooter = ReactStories.CompactFooter;
