import reactMeta from '../components-react/navbar.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Navigation Bar',
  id: 'css-navbar',
};

export { Default, WithHeading, WithEndItems } from '../components-react/navbar.stories';
