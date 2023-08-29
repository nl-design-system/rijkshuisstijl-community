/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'rhc-icon-arrow-right',
  shadow: true,
})
export class IconArrowRight {
  render() {
    return (
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.19522 3.52858C8.45557 3.26823 8.87768 3.26823 9.13803 3.52858L13.138 7.52858C13.3984 7.78892 13.3984 8.21103 13.138 8.47138L9.13803 12.4714C8.87768 12.7317 8.45557 12.7317 8.19522 12.4714C7.93487 12.211 7.93487 11.7889 8.19522 11.5286L11.0571 8.66665H3.33329C2.9651 8.66665 2.66663 8.36817 2.66663 7.99998C2.66663 7.63179 2.9651 7.33331 3.33329 7.33331H11.0571L8.19522 4.47138C7.93487 4.21103 7.93487 3.78892 8.19522 3.52858Z"
        />
      </svg>
    );
  }
}
