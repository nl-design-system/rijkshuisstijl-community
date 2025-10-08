import reactMeta from '../components-react/table.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Table',
  id: 'css-table',
};

export {
  Tabel,
  Caption,
  Footer,
  Sorting,
  SortingDescending,
  SortingAscending,
  Alignment,
  Content,
  RightToLeft,
} from '../components-react/table.stories';
