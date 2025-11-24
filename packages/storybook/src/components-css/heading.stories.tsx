import reactMeta from '../components-react/heading.stories';
import * as ReactStories from '../components-react/heading.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Heading',
  id: 'css-heading',
};

export const Heading1 = ReactStories.Heading1;
export const Heading2 = ReactStories.Heading2;
export const Heading3 = ReactStories.Heading3;
export const Heading4 = ReactStories.Heading4;
export const Heading5 = ReactStories.Heading5;
export const Heading5Appearance = ReactStories.Heading5Appearance;
