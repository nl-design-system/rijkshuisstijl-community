import reactMeta from '../components-react/heading.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Heading',
  id: 'css-heading',
};

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading5Appearance,
} from '../components-react/heading.stories';
