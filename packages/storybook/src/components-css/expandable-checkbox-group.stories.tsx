import reactMeta from '../components-react/expandable-checkbox-group.stories';
import * as ReactStories from '../components-react/expandable-checkbox-group.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Expandable Checkbox Group',
  id: 'css-expandable-checkbox-group',
};

export const Default = ReactStories.Default;
export const Open = ReactStories.Open;
