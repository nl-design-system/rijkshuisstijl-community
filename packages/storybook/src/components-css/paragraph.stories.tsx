import reactMeta from '../components-react/paragraph.stories';
import * as ReactStories from '../components-react/paragraph.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Paragraph',
  id: 'css-paragraph',
};

export const Default = ReactStories.Default;
export const Lead = ReactStories.Lead;
