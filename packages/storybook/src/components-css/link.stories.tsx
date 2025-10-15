import reactMeta from '../components-react/link.stories';
import * as ReactStories from '../components-react/link.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Link',
  id: 'css-link',
};

export const Default = ReactStories.Default;
export const IconLeft = ReactStories.IconLeft;
export const IconRight = ReactStories.IconRight;
export const Active = ReactStories.Active;
export const Hover = ReactStories.Hover;
export const Focus = ReactStories.Focus;
export const FocusVisible = ReactStories.FocusVisible;
export const Visited = ReactStories.Visited;
export const LinkInParagraph = ReactStories.LinkInParagraph;
