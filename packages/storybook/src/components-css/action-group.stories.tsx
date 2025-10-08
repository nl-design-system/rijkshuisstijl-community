import { merge } from 'lodash-es';
import reactMeta from '../components-react/action-group.stories';

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
  id: 'css-action-group',
};

export { Column, ColumnStretch, Row } from '../components-react/action-group.stories';
