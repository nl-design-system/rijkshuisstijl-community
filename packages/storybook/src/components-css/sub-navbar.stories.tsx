import reactMeta from '../components-react/sub-navbar.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Navigation Bar/Sub Navigation Bar',
  id: 'css-sub-navbar',
};

export { Default } from '../components-react/sub-navbar.stories';
