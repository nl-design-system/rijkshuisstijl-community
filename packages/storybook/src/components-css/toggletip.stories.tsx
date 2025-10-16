import reactMeta from '../components-react/toggletip.stories';
import * as ReactStories from '../components-react/toggletip.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Toggletip',
  id: 'css-toggletip',
};

export const Default = ReactStories.Default;
