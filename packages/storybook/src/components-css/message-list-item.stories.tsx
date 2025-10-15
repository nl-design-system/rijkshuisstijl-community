import reactMeta from '../components-react/message-list-item.stories';
import * as ReactStories from '../components-react/message-list-item.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Message List/Message List Item',
  id: 'css-message-list-item',
};

export const Default = ReactStories.Default;
export const Hover = ReactStories.Hover;
export const Focus = ReactStories.Focus;
