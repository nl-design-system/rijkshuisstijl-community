import { merge } from 'lodash-es';
import reactMeta from '../components-react/article.stories';

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
  id: 'css-article',
};

export { Default } from '../components-react/article.stories';
