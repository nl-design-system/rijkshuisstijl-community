import { merge } from 'lodash-es';
import reactMeta from '../components-react/column-layout.stories';

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
  title: 'Column Layout',
  id: 'css-column-layout',
};

export { Default } from '../components-react/column-layout.stories';
