import reactMeta from '../components-react/form-field-radio.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Form field/Form Field Radio',
  id: 'css-form-field-radio',
};

export { Default } from '../components-react/form-field-radio.stories';
