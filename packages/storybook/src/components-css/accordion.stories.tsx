import readme from '@utrecht/components/accordion/README.md?raw';
import { merge } from 'lodash-es';
import reactMeta from '../components-react/accordion.stories';

export default {
  ...merge({}, reactMeta, {
    parameters: {
      docs: {
        codePanel: false,
        canvas: {
          sourceState: 'none',
        },
        description: {
          component: readme,
        },
      },
    },
  }),
  id: 'css-accordion',
};

export { Default, AccordionWithSections, RTL } from '../components-react/accordion.stories';
