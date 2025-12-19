import reactMeta from '../components-react/message-list.stories';
import * as ReactStories from '../components-react/message-list.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Message List',
  id: 'css-message-list',
};

export const Default = ReactStories.Default;
export const SmallContainer = ReactStories.SmallContainer;
