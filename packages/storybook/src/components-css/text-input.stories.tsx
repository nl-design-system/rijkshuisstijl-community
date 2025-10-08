import reactMeta from '../components-react/text-input.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Text Input',
  id: 'css-text-input',
};

export {
  Default,
  Required,
  InputRequired,
  Disabled,
  ReadOnly,
  Invalid,
  Placeholder,
  AutoComplete,
  LeftToRightInput,
} from '../components-react/text-input.stories';
