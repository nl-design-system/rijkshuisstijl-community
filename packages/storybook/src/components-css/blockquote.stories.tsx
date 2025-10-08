import { merge } from 'lodash-es';
import reactMeta from '../components-react/blockquote.stories';

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
  id: 'css-blockquote',
};

export { Default, Attribution } from '../components-react/blockquote.stories';
