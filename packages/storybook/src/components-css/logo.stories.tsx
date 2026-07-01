import reactMeta from '../components-react/logo.stories';
import * as ReactStories from '../components-react/logo.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Logo',
  id: 'css-logo',
};

export const Default = ReactStories.Default;
export const NoOrganisation = ReactStories.NoOrganisation;
export const WithLink = ReactStories.WithLink;
export const WithLinkActive = ReactStories.WithLinkActive;
export const WithLinkFocus = ReactStories.WithLinkFocus;
export const WithLinkFocusVisible = ReactStories.WithLinkFocusVisible;
export const WithLinkHover = ReactStories.WithLinkHover;
export const WithSubtitle = ReactStories.WithSubtitle;
