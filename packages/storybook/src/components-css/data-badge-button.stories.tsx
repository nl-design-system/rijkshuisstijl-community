import reactMeta from '../components-react/data-badge-button.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Data Badge Button',
  id: 'css-data-badge-button',
};

export {
  Default,
  WithIconBefore,
  WithIconAfter,
  WithHelperText,
  FocusVisible,
  Hover,
  MultipleButtons,
} from '../components-react/data-badge-button.stories';
