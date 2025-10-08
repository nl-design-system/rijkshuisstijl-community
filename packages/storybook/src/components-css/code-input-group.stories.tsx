import { merge } from 'lodash-es';
import reactMeta from '../components-react/code-input-group.stories';

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
  title: 'Code Input Group',
  id: 'css-code-input-group',
};

export {
  Default,
  WithLabel,
  CapitalizedLetters,
  OnlyNumbers,
  Invalid,
} from '../components-react/code-input-group.stories';
