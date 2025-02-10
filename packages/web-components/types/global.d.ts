/* eslint-disable no-unused-vars */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import {
  AccordionWebComponentAttributes,
  ActionGroupWebComponentAttributes,
  AlertWebComponentAttributes,
  ButtonWebComponentAttributes,
  HeroWebComponentAttributes,
} from '../src';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'rhc-hero': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & HeroWebComponentAttributes;
      'rhc-accordion': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & AccordionWebComponentAttributes;
      'rhc-alert': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & AlertWebComponentAttributes;
      'rhc-button': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & ButtonWebComponentAttributes;
      'rhc-action-group': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
        ActionGroupWebComponentAttributes;
    }
  }
}
