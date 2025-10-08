import { merge } from 'lodash-es';
import reactMeta from '../components-react/checkbox.stories';

export default {
  ...merge({}, reactMeta, {
    parameters: {
      docs: {
        codePanel: false,
        canvas: {
          sourceState: 'none',
        },
      },
    },
  }),
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
