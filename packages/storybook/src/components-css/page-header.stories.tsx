import reactMeta from '../components-react/page-header.stories';
import * as ReactStories from '../components-react/page-header.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Page Header',
  id: 'css-page-header',
};

export const Default = ReactStories.Default;
