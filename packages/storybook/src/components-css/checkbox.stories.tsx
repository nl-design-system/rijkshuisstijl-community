import reactMeta from '../components-react/checkbox.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Checkbox',
  id: 'css-checkbox',
};

export {
  Default,
  Active,
  Hover,
  Focus,
  FocusVisible,
  Disabled,
  Invalid,
  Checked,
  CheckedAndActive,
  CheckedAndHover,
  CheckedAndFocus,
  CheckedAndFocusVisible,
  CheckedAndDisabled,
  Indeterminate,
  IndeterminateAndActive,
  IndeterminateAndHover,
  IndeterminateAndFocus,
  IndeterminateAndFocusVisible,
  IndeterminateAndDisabled,
} from '../components-react/checkbox.stories';
