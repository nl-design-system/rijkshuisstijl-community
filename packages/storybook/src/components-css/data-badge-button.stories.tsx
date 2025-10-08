import { merge } from 'lodash-es';
import reactMeta from '../components-react/data-badge-button.stories';

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
  id: 'css-data-badge-button',
};

export {
  Default,
  WithIconBefore,
  WithIconAfter,
  WithHelperText,
  FocusVisible,
  Hover,
  MultipleButtons,
} from '../components-react/data-badge-button.stories';
