import reactMeta from '../components-react/skip-link.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Skip link',
  id: 'css-skip-link',
};

export { Default, RightToLeft, FocusVisible } from '../components-react/skip-link.stories';
