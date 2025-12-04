import reactMeta from '../components-react/fieldset.stories';
import * as ReactStories from '../components-react/fieldset.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Fieldset',
  id: 'css-fieldset',
};

export const Default = ReactStories.Default;
export const Disabled = ReactStories.Disabled;
export const PartiallyDisabled = ReactStories.PartiallyDisabled;
export const Invalid = ReactStories.Invalid;
export const PartiallyInvalid = ReactStories.PartiallyInvalid;
