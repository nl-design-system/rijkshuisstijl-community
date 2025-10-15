import reactMeta from '../components-react/button.stories';
import * as ReactStories from '../components-react/button.stories';
import { mergeCssMeta } from '../helpers/mergeCssMeta';

export default {
  ...mergeCssMeta(reactMeta),
  title: 'Button',
  id: 'css-button',
};

export const Default = ReactStories.Default;
export const PrimaryAction = ReactStories.PrimaryAction;
export const SecondaryAction = ReactStories.SecondaryAction;
export const Subtle = ReactStories.Subtle;
export const IconLeft = ReactStories.IconLeft;
export const IconRight = ReactStories.IconRight;
export const Active = ReactStories.Active;
export const Pressed = ReactStories.Pressed;
export const Hover = ReactStories.Hover;
export const Disabled = ReactStories.Disabled;
export const Busy = ReactStories.Busy;
export const IconOnly = ReactStories.IconOnly;
