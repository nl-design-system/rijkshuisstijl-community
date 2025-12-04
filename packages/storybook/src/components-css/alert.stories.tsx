import reactMeta from '../components-react/alert.stories';
import * as ReactStories from '../components-react/alert.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Alert',
  id: 'css-alert',
};

export const Informative = ReactStories.Informative;
export const Negative = ReactStories.Negative;
export const Positive = ReactStories.Positive;
export const Warning = ReactStories.Warning;
