import reactMeta from '../components-react/separator.stories';
import * as ReactStories from '../components-react/separator.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Separator',
  id: 'css-separator',
};

export const Default = ReactStories.Default;
export const Invisible = ReactStories.Invisible;
