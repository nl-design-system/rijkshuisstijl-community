import reactMeta from '../components-react/form-field-text-input.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Form Field/Form Field Text Input',
  id: 'css-form-field-text-input',
};

export {
  Default,
  Description,
  ErrorMessage,
  Status,
  Password,
  Disabled,
  ReadOnly,
  Required,
  InputRequired,
  Placeholder,
  LeftToRightInput,
} from '../components-react/form-field-text-input.stories';
