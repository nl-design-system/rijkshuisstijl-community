import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import readme from './navbar.md?raw';
import reactMeta from '../components-react/navbar.stories';
import * as ReactStories from '../components-react/navbar.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

const cssMeta = mergeCssMeta(reactMeta);

export default {
  ...cssMeta,
  title: 'Navigation Bar',
  id: 'css-navbar',
  parameters: {
    ...cssMeta.parameters,
    docs: {
      ...cssMeta.parameters.docs,
      description: {
        component: mergeMarkdown([readme]),
      },
    },
  },
};

export const Default = ReactStories.Default;
export const WithIdentity = ReactStories.WithIdentity;
export const WithEndItems = ReactStories.WithEndItems;
export const WithCurrentPage = ReactStories.WithCurrentPage;
export const WithIcons = ReactStories.WithIcons;
export const WithSubList = ReactStories.WithSubList;
export const WithMegaMenu = ReactStories.WithMegaMenu;
