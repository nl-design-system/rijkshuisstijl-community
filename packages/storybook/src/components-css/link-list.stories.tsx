import reactMeta from '../components-react/link-list.stories';
import * as ReactStories from '../components-react/link-list.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Link List',
  id: 'css-link-list',
};

export const Default = ReactStories.Default;
export const ColumnsLayout = ReactStories.ColumnsLayout;
