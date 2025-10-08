import reactMeta from '../components-react/message-list.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Message List',
  id: 'css-message-list',
};

export { Default, SmallContainer } from '../components-react/message-list.stories';
