import { merge } from 'lodash-es';
import reactMeta from '../components-react/button.stories';

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
  title: 'Button',
  id: 'css-button',
};

export {
  Default,
  PrimaryAction,
  SecondaryAction,
  Subtle,
  IconLeft,
  IconRight,
  Active,
  Pressed,
  Hover,
  Disabled,
  Busy,
  IconOnly,
} from '../components-react/button.stories';
