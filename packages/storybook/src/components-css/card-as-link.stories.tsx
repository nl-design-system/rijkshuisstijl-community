import { merge } from 'lodash-es';
import reactMeta from '../components-react/card-as-link.stories';

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
  id: 'css-card-as-link',
};

export { Default, FullBleed, Horizontal } from '../components-react/card-as-link.stories';
