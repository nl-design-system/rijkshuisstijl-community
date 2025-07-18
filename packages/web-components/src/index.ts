/* eslint-disable no-unused-vars */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { AccordionWebComponent, type AccordionWebComponentAttributes } from './components/Accordion';
import { ActionGroupWebComponent, type ActionGroupWebComponentAttributes } from './components/ActionGroup';
import { AlertWebComponent, type AlertWebComponentAttributes } from './components/Alert';
import { ArticleWebComponent, type ArticleWebComponentAttributes } from './components/Article';
import { BlockquoteWebComponent, type BlockquoteWebComponentAttributes } from './components/Blockquote';
import {
  type BreadcrumbNavLinkWebComponentAttributes,
  type BreadcrumbNavSeparatorWebComponentAttributes,
  BreadcrumbNavWebComponent,
  type BreadcrumbNavWebComponentAttributes,
} from './components/BreadcrumbNav';
import { ButtonWebComponent, type ButtonWebComponentAttributes } from './components/Button';
import { CardAsLinkWebComponent, type CardAsLinkWebComponentAttributes } from './components/CardAsLink';
import { CheckboxWebComponent, type CheckboxWebComponentAttributes } from './components/Checkbox';
import { CheckboxGroupWebComponent, type CheckboxGroupWebComponentAttributes } from './components/CheckboxGroup';
import {
  type FormFieldCheckboxGroupAttributes,
  FormFieldCheckboxGroupWebComponent,
} from './components/FormFieldCheckboxGroup';
import {
  type FormFieldCheckboxOptionAttributes,
  FormFieldCheckboxOptionWebComponent,
} from './components/FormFieldCheckboxOption';
import { type FormFieldRadioAttributes, FormFieldRadioWebComponent } from './components/FormFieldRadio';
import { type FormFieldRadioGroupAttributes, FormFieldRadioGroupWebComponent } from './components/FormFieldRadioGroup';
import { type FormFieldSelectAttributes, FormFieldSelectWebComponent } from './components/FormFieldSelect';
import { type FormFieldTextInputAttributes, FormFieldTextInputWebComponent } from './components/FormFieldTextInput';
import { type FormFieldTextareaAttributes, FormFieldTextareaWebComponent } from './components/FormFieldTextarea';
import { HeroWebComponent, type HeroWebComponentAttributes } from './components/Hero';
import { IconWebComponent, type IconWebComponentAttributes } from './components/Icon';
import { LinkWebComponent, type LinkWebComponentAttributes } from './components/Link';

export { AccordionWebComponent, type AccordionWebComponentAttributes };
export { ActionGroupWebComponent, type ActionGroupWebComponentAttributes };
export { AlertWebComponent, type AlertWebComponentAttributes };
export { ArticleWebComponent, type ArticleWebComponentAttributes };
export { BlockquoteWebComponent, type BlockquoteWebComponentAttributes };
export {
  type BreadcrumbNavLinkWebComponentAttributes,
  type BreadcrumbNavSeparatorWebComponentAttributes,
  BreadcrumbNavWebComponent,
  type BreadcrumbNavWebComponentAttributes,
};
export { ButtonWebComponent, type ButtonWebComponentAttributes };
export { CardAsLinkWebComponent, type CardAsLinkWebComponentAttributes };
export { CheckboxGroupWebComponent, type CheckboxGroupWebComponentAttributes };
export { CheckboxWebComponent, type CheckboxWebComponentAttributes };
export { type FormFieldCheckboxGroupAttributes, FormFieldCheckboxGroupWebComponent };
export { type FormFieldCheckboxOptionAttributes, FormFieldCheckboxOptionWebComponent };
export { FormFieldRadioAttributes, FormFieldRadioWebComponent };
export { type FormFieldRadioGroupAttributes, FormFieldRadioGroupWebComponent };
export { type FormFieldSelectAttributes, FormFieldSelectWebComponent };
export { type FormFieldTextInputAttributes, FormFieldTextInputWebComponent };
export { type FormFieldTextareaAttributes, FormFieldTextareaWebComponent };
export { HeroWebComponent, type HeroWebComponentAttributes };
export { IconWebComponent, type IconWebComponentAttributes };
export { LinkWebComponent, type LinkWebComponentAttributes };

declare global {
  namespace JSX {
    type WebComponentAttributes<T> = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & T;
    interface IntrinsicElements {
      'rhc-accordion': WebComponentAttributes<AccordionWebComponentAttributes>;
      'rhc-action-group': WebComponentAttributes<ActionGroupWebComponentAttributes>;
      'rhc-alert': WebComponentAttributes<AlertWebComponentAttributes>;
      'rhc-article': WebComponentAttributes<ArticleWebComponentAttributes>;
      'rhc-blockquote': WebComponentAttributes<BlockquoteWebComponentAttributes>;
      'rhc-breadcrumb-nav': WebComponentAttributes<BreadcrumbNavWebComponentAttributes>;
      'rhc-button': WebComponentAttributes<ButtonWebComponentAttributes>;
      'rhc-card-as-link': WebComponentAttributes<CardAsLinkWebComponentAttributes>;
      'rhc-checkbox-group': WebComponentAttributes<CheckboxGroupWebComponentAttributes>;
      'rhc-checkbox': WebComponentAttributes<CheckboxWebComponentAttributes>;
      'rhc-form-checkbox-group': WebComponentAttributes<FormFieldCheckboxGroupAttributes>;
      'rhc-form-checkbox': WebComponentAttributes<FormFieldCheckboxOptionAttributes>;
      'rhc-form-radio': WebComponentAttributes<FormFieldRadioAttributes>;
      'rhc-form-radio-group': WebComponentAttributes<FormFieldRadioGroupAttributes>;
      'rhc-form-select': WebComponentAttributes<FormFieldSelectAttributes>;
      'rhc-form-textinput': WebComponentAttributes<FormFieldTextInputAttributes>;
      'rhc-form-textarea': WebComponentAttributes<FormFieldTextareaAttributes>;
      'rhc-hero': WebComponentAttributes<HeroWebComponentAttributes>;
      'rhc-icon': WebComponentAttributes<IconWebComponentAttributes>;
    }
  }
}
