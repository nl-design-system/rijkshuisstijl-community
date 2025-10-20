import reactMeta from '../components-react/radio-group.stories';
import * as ReactStories from '../components-react/radio-group.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Radio Group',
  id: 'css-radio-group',
};

export const Default = ReactStories.Default;
