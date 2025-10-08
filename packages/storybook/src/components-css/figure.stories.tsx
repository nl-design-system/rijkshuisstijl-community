import reactMeta from '../components-react/figure.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Figure',
  id: 'css-figure',
};

export { DefaultFigure } from '../components-react/figure.stories';
