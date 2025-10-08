import { merge } from 'lodash-es';
import reactMeta from '../components-react/breadcrumb-nav.stories';

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
  id: 'css-breadcrumb-nav',
};

export { Default, Current, Separator, Active, DisabledAndCurrent } from '../components-react/breadcrumb-nav.stories';
