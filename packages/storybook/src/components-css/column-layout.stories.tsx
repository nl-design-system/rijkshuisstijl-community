import reactMeta from '../components-react/column-layout.stories';
import * as ReactStories from '../components-react/column-layout.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Column Layout',
  id: 'css-column-layout',
};

export const Default = ReactStories.Default;
