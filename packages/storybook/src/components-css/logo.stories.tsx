import reactMeta from '../components-react/logo.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Logo',
  id: 'css-logo',
};

export { Default, WithSubtitle } from '../components-react/logo.stories';
