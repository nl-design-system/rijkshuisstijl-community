import readme from '@utrecht/components/accordion/README.md?raw';
import reactMeta from '../components-react/accordion.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta, {
    parameters: {
      docs: {
        description: {
          component: readme,
        },
      },
    },
  }),
  title: 'Accordion',
  id: 'css-accordion',
};

export { Default, AccordionWithSections, RTL } from '../components-react/accordion.stories';
