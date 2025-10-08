import reactMeta from '../components-react/form-field-checkbox-group.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Form Field/Form Field Checkbox Group',
  id: 'css-form-field-checkbox-group',
};

export {
  Default,
  Error,
  Description,
  Status,
  RightToLeft,
} from '../components-react/form-field-checkbox-group.stories';
