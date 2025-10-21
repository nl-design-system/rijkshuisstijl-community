import reactMeta from '../components-react/page-number-navigation.stories';
import * as ReactStories from '../components-react/page-number-navigation.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Page Number Navigation',
  id: 'css-page-number-navigation',
};

export const Default = ReactStories.Default;
