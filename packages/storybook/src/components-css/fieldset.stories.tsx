import reactMeta from '../components-react/fieldset.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Fieldset',
  id: 'css-fieldset',
};

export { Default, Disabled, PartiallyDisabled, Invalid, PartiallyInvalid } from '../components-react/fieldset.stories';
