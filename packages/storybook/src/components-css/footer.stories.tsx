import reactMeta from '../components-react/footer.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Footer',
  id: 'css-footer',
};

export {
  DefaultFooter,
  PrimaryOutlinedFooter,
  PrimaryOutlinedFooterSubFooter,
  ColumnLayoutFooter,
  CustomHeadingFooter,
} from '../components-react/footer.stories';
