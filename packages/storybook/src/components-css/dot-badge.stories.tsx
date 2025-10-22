import reactMeta from '../components-react/dot-badge.stories';
import * as ReactStories from '../components-react/dot-badge.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Dot Badge',
  id: 'css-dot-badge',
};

export const Default = ReactStories.Default;
