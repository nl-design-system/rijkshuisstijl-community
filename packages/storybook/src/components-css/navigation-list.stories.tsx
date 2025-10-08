import reactMeta from '../components-react/navigation-list.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Navigation List',
  id: 'css-navigation-list',
};

export { Default, SmallContainer } from '../components-react/navigation-list.stories';
