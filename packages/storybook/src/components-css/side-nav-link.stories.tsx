import reactMeta from '../components-react/side-nav-link.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Side Navigation/Side Navigation Link',
  id: 'css-side-nav-link',
};

export {
  Default,
  Hover,
  Focus,
  FocusVisible,
  Active,
  Current,
  CurrentAndHover,
  CurrentAndActive,
  CurrentAndFocus,
  CurrentAndFocusVisible,
  WithoutIcon,
} from '../components-react/side-nav-link.stories';
