import { merge } from 'lodash-es';
import reactMeta from '../components-react/data-summary-item.stories';

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
  title: 'Data Summary Item',
  id: 'css-data-summary-item',
};

export { Default, Row } from '../components-react/data-summary-item.stories';
