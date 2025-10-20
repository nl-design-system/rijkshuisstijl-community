import reactMeta from '../components-react/icon.stories';
import * as ReactStories from '../components-react/icon.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Icon',
  id: 'css-icon',
};

export const Default = ReactStories.Default;
export const CustomIcon = ReactStories.CustomIcon;
export const FromDifferentIconSet = ReactStories.FromDifferentIconSet;
