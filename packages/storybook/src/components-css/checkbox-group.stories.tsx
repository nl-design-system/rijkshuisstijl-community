import reactMeta from '../components-react/checkbox-group.stories';
import * as ReactStories from '../components-react/checkbox-group.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Checkbox Group',
  id: 'css-checkbox-group',
};

export const Default = ReactStories.Default;
