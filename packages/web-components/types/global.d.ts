/* eslint-disable no-unused-vars */
import React from 'react';
import { AccordionWebComponentAttributes, HeroWebComponentAttributes } from '../src';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'rhc-hero': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & HeroWebComponentAttributes;
      'rhc-accordion': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
        AccordionWebComponentAttributes;
    }
  }
}
