import reactMeta from '../components-react/listbox.stories';
import * as ReactStories from '../components-react/listbox.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Listbox',
  id: 'css-listbox',
};

export const Default = ReactStories.Default;
