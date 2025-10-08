import reactMeta from '../components-react/hero.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Hero',
  id: 'css-hero',
};

export { Default, CustomChildren, TextAlignRight, AspectRatioFourToThree } from '../components-react/hero.stories';
