/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'rhc-icon-error',
  shadow: true,
})
export class IconError {
  render() {
    return (
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 5C10.5523 5 11 5.44772 11 6V10C11 10.5523 10.5523 11 10 11C9.44771 11 9 10.5523 9 10V6C9 5.44772 9.44771 5 10 5ZM9 14C9 13.4477 9.44771 13 10 13H10.01C10.5623 13 11.01 13.4477 11.01 14C11.01 14.5523 10.5623 15 10.01 15H10C9.44771 15 9 14.5523 9 14Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}
