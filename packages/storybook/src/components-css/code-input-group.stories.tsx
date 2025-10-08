import reactMeta from '../components-react/code-input-group.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Code Input Group',
  id: 'css-code-input-group',
};

export {
  Default,
  WithLabel,
  CapitalizedLetters,
  OnlyNumbers,
  Invalid,
} from '../components-react/code-input-group.stories';
