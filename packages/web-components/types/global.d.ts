/* eslint-disable no-unused-vars */
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'rhc-hero': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
