import reactMeta from '../components-react/code-input-group.stories';
import * as ReactStories from '../components-react/code-input-group.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Code Input Group',
  id: 'css-code-input-group',
};

export const Default = ReactStories.Default;
export const WithLabel = ReactStories.WithLabel;
export const CapitalizedLetters = ReactStories.CapitalizedLetters;
export const OnlyNumbers = ReactStories.OnlyNumbers;
export const Invalid = ReactStories.Invalid;
