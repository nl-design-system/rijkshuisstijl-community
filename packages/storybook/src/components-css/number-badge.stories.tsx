import reactMeta from '../components-react/number-badge.stories';
import * as ReactStories from '../components-react/number-badge.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Number Badge',
  id: 'css-number-badge',
};

export const Default = ReactStories.Default;
export const WithValue = ReactStories.WithValue;
