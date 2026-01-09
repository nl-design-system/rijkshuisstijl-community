import reactMeta from '../components-react/language-navigation.stories';
import * as ReactStories from '../components-react/language-navigation.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'LanguageNavigation',
  id: 'css-language-navigation',
};

export const Default = ReactStories.Default;
export const DefaultOpen = ReactStories.DefaultOpen;
export const ManyLanguages = ReactStories.ManyLanguages;
export const WithoutIcon = ReactStories.WithoutIcon;
export const KeepOpenOnSelect = ReactStories.KeepOpenOnSelect;
export const Controlled = ReactStories.Controlled;
export const EnglishDefault = ReactStories.EnglishDefault;
export const RTLExample = ReactStories.RTLExample;
