import reactMeta from '../components-react/drawer.stories';
import * as ReactStories from '../components-react/drawer.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Drawer',
  id: 'css-drawer',
};

export const Default = ReactStories.Default;
export const InlineStart = ReactStories.InlineStart;
export const InlineEnd = ReactStories.InlineEnd;
export const BlockStart = ReactStories.BlockStart;
export const BlockEnd = ReactStories.BlockEnd;
export const OverflowY = ReactStories.OverflowY;
