import reactMeta from '../components-react/link.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Link',
  id: 'css-link',
};

export {
  Default,
  IconLeft,
  IconRight,
  Active,
  Hover,
  Focus,
  FocusVisible,
  Visited,
  LinkInParagraph,
} from '../components-react/link.stories';
