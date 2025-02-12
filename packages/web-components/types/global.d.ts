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
      'rhc-breadcrumb-nav-link': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
        BreadcrumbNavLinkWebComponentAttributes;
      'rhc-breadcrumb-nav-separator': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
        BreadcrumbNavSeparatorWebComponentAttributes;
      'rhc-button': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & ButtonWebComponentAttributes;
      'rhc-hero': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & HeroWebComponentAttributes;
      'rhc-icon': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & IconWebComponentAttributes;
    }
  }
}
