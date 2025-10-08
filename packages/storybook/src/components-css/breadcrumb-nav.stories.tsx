import reactMeta from '../components-react/breadcrumb-nav.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Breadcrumb Navigation',
  id: 'css-breadcrumb-nav',
};

export { Default, Current, Separator, Active, DisabledAndCurrent } from '../components-react/breadcrumb-nav.stories';
