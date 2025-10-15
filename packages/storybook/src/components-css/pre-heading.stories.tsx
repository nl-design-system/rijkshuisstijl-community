import reactMeta from '../components-react/pre-heading.stories';
import * as ReactStories from '../components-react/pre-heading.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Pre-heading',
  id: 'css-pre-heading',
};

export const Default = ReactStories.Default;
