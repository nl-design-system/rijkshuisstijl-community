import { merge } from 'lodash-es';
import reactMeta from '../components-react/checkbox-group.stories';

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
  title: 'Checkbox Group',
  id: 'css-checkbox-group',
};

export { Default } from '../components-react/checkbox-group.stories';
