import reactMeta from '../components-react/table.stories';
import * as ReactStories from '../components-react/table.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Table',
  id: 'css-table',
};

export const Tabel = ReactStories.Tabel;
export const Caption = ReactStories.Caption;
export const Footer = ReactStories.Footer;
export const Sorting = ReactStories.Sorting;
export const SortingDescending = ReactStories.SortingDescending;
export const SortingAscending = ReactStories.SortingAscending;
export const Alignment = ReactStories.Alignment;
export const Content = ReactStories.Content;
export const RightToLeft = ReactStories.RightToLeft;
