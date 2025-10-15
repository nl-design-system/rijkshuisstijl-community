import reactMeta from '../components-react/footer.stories';
import * as ReactStories from '../components-react/footer.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Footer',
  id: 'css-footer',
};

export const DefaultFooter = ReactStories.DefaultFooter;
export const PrimaryOutlinedFooter = ReactStories.PrimaryOutlinedFooter;
export const PrimaryOutlinedFooterSubFooter = ReactStories.PrimaryOutlinedFooterSubFooter;
export const ColumnLayoutFooter = ReactStories.ColumnLayoutFooter;
export const CustomHeadingFooter = ReactStories.CustomHeadingFooter;
