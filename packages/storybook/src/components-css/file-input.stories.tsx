import reactMeta from '../components-react/file-input.stories';
import * as ReactStories from '../components-react/file-input.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'File Input',
  id: 'css-file-input',
  tags: ['js'],
};

export const Default = ReactStories.Default;
export const MetCustomElementenLijst = ReactStories.MetCustomElementenLijst;
export const DefaultFiles = ReactStories.DefaultFiles;
