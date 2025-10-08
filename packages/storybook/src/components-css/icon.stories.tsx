import reactMeta from '../components-react/icon.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Icon',
  id: 'css-icon',
};

export { Default, CustomIcon, FromDifferentIconSet } from '../components-react/icon.stories';
