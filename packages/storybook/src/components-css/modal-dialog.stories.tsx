import reactMeta from '../components-react/modal-dialog.stories';
import * as ReactStories from '../components-react/modal-dialog.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Modal Dialog',
  id: 'css-modal-dialog',
};

export const Default = ReactStories.Default;
