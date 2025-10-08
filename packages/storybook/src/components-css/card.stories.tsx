import { merge } from 'lodash-es';
import reactMeta from '../components-react/card.stories';

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
  title: 'Card',
  id: 'css-card',
};

export { Default } from '../components-react/card.stories';
