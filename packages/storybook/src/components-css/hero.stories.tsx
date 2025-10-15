import reactMeta from '../components-react/hero.stories';
import * as ReactStories from '../components-react/hero.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Hero',
  id: 'css-hero',
};

export const Default = ReactStories.Default;
export const CustomChildren = ReactStories.CustomChildren;
export const TextAlignRight = ReactStories.TextAlignRight;
export const AspectRatioFourToThree = ReactStories.AspectRatioFourToThree;
