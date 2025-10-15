import reactMeta from '../components-react/action-group.stories';
import * as ReactStories from '../components-react/action-group.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Action Group',
  id: 'css-action-group',
};

export const Column = ReactStories.Column;
export const ColumnStretch = ReactStories.ColumnStretch;
export const Row = ReactStories.Row;
