import { merge } from 'lodash-es';
import reactMeta from '../components-react/alert.stories';

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
  title: 'Alert',
  id: 'css-alert',
};

export { Informative, Negative, Positive, Warning } from '../components-react/alert.stories';
