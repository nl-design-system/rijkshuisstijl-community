/* eslint-disable no-unused-vars */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { AccordionWebComponentAttributes, HeroWebComponentAttributes } from '../src';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'rhc-hero': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & HeroWebComponentAttributes;
      'rhc-accordion': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & AccordionWebComponentAttributes;
    }
  }
}
