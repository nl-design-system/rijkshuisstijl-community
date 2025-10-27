import * as ReactStories from '../components-react/rounded-corner.stories';
import reactMeta from '../components-react/rounded-corner.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Rounded Corner',
  id: 'css-rounded-corner',
};

export const BlueCurvedBorder = ReactStories.BlueCurvedBorder;
export const ImageInsideRoundedCorner = ReactStories.ImageInsideRoundedCorner;
export const ImageBackground = ReactStories.ImageBackground;
export const CustomTokens = ReactStories.CustomTokens;
