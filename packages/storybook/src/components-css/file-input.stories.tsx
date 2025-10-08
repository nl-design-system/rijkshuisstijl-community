import reactMeta from '../components-react/file-input.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'File Input',
  id: 'css-file-input',
};

export { Default, MetCustomElementenLijst, DefaultFiles } from '../components-react/file-input.stories';
