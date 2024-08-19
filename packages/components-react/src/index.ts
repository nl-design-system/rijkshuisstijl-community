// Export all Utrecht components
export * from '@utrecht/component-library-react/dist/css-module';
// Import CSS from Rijkshuisstijl Community components-css
import '@rijkshuisstijl-community/components-css/index.scss';

// Export overwrites and new components
export {
  Accordion,
  type AccordionProps,
  AccordionProvider,
  type AccordionProviderProps,
  AccordionSection,
  type AccordionSectionProps,
  type AccordionSectionProviderProps,
} from './Accordion';
export { Link } from './Link';
export { ActionGroup } from './ActionGroup';
export {
  Button,
  type ButtonProps,
  IconButton,
  type IconButtonProps,
  PrimaryActionButton,
  SecondaryActionButton,
  SubtleButton,
} from './Button';
export { Logo } from './Logo';
export { Alert } from './Alert';
export type { LogoProps } from './Logo';
