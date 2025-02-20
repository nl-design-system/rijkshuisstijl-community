/* eslint-disable no-unused-vars */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import {
  AccordionWebComponentAttributes,
  ActionGroupWebComponentAttributes,
  AlertWebComponentAttributes,
  ArticleWebComponentAttributes,
  BlockquoteWebComponentAttributes,
  BreadcrumbNavLinkWebComponentAttributes,
  BreadcrumbNavSeparatorWebComponentAttributes,
  BreadcrumbNavWebComponentAttributes,
  ButtonWebComponentAttributes,
  CardWebComponentAttributes,
  CheckboxGroupWebComponentAttributes,
  CheckboxWebComponentAttributes,
  FormFieldCheckboxGroupAttributes,
  FormFieldCheckboxOptionAttributes,
  FormFieldRadioAttributes,
  FormFieldRadioGroupAttributes,
  FormFieldSelectAttributes,
  FormFieldTextInputAttributes,
  HeroWebComponentAttributes,
  IconWebComponentAttributes,
} from '../src';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'rhc-accordion': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & AccordionWebComponentAttributes;
      'rhc-action-group': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
        ActionGroupWebComponentAttributes;
      'rhc-alert': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & AlertWebComponentAttributes;
      'rhc-article': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & ArticleWebComponentAttributes;
      'rhc-blockquote': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & BlockquoteWebComponentAttributes;
      'rhc-breadcrumb-nav': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
        BreadcrumbNavWebComponentAttributes;
      'rhc-button': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & ButtonWebComponentAttributes;
      'rhc-card': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & CardWebComponentAttributes;
      'rhc-checkbox-group': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
        CheckboxGroupWebComponentAttributes;
      'rhc-checkbox': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & CheckboxWebComponentAttributes;
      'rhc-form-checkbox-group': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
        FormFieldCheckboxGroupAttributes;
      'rhc-form-checkbox': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
        FormFieldCheckboxOptionAttributes;
      'rhc-form-radio': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & FormFieldRadioAttributes;
      'rhc-form-radio-group': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
        FormFieldRadioGroupAttributes;
      'rhc-form-select': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & FormFieldSelectAttributes;
      'rhc-form-textinput': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & FormFieldTextInputAttributes;
      'rhc-hero': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & HeroWebComponentAttributes;
      'rhc-icon': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & IconWebComponentAttributes;
    }
  }
}
