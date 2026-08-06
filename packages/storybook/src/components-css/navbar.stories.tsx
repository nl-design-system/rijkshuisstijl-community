import reactMeta from '../components-react/navbar.stories';
import * as ReactStories from '../components-react/navbar.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Navigation Bar',
  id: 'css-navbar',
};

export const Default = ReactStories.Default;
export const WithEndItems = ReactStories.WithEndItems;
