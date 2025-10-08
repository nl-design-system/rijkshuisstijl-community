import reactMeta from '../components-react/textarea.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Text Area',
  id: 'css-textarea',
};

export {
  Default,
  ReadOnly,
  Disabled,
  Required,
  InputRequired,
  Invalid,
  Placeholder,
  RightToLeft,
} from '../components-react/textarea.stories';
