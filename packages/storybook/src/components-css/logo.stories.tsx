import reactMeta from '../components-react/logo.stories';
import * as ReactStories from '../components-react/logo.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Logo',
  id: 'css-logo',
};

export const Default = ReactStories.Default;
export const WithSubtitle = ReactStories.WithSubtitle;
