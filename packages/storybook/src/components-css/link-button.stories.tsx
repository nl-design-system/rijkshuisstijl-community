import reactMeta from '../components-react/link-button.stories';
import * as ReactStories from '../components-react/link-button.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'LinkButton',
  id: 'css-link-button',
};

export const Default = ReactStories.Default;
