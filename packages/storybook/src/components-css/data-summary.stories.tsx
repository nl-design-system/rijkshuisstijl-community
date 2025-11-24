import reactMeta from '../components-react/data-summary.stories';
import * as ReactStories from '../components-react/data-summary.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Data Summary',
  id: 'css-data-summary',
};

export const Default = ReactStories.Default;
export const Rows = ReactStories.Rows;
export const NoActions = ReactStories.NoActions;
export const NoActionsColumn = ReactStories.NoActionsColumn;
