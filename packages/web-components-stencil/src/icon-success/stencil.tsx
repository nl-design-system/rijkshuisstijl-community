/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'rhc-icon-success',
  shadow: true,
})
export class IconSuccess {
  render() {
    return (
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM13.7071 7.29289C14.0976 7.68342 14.0976 8.31658 13.7071 8.70711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L12.2929 7.29289C12.6834 6.90237 13.3166 6.90237 13.7071 7.29289Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}
