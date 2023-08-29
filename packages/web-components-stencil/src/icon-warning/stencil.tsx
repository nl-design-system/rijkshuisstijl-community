/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'rhc-icon-warning',
  shadow: true,
})
export class IconWarning {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <defs>
          <path
            id="a"
            d="M10 13.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm0-9.375c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 0 1-2.5 0v-5c0-.69.56-1.25 1.25-1.25z"
          />
        </defs>
        <g fill-rule="evenodd">
          <path d="M19.565 2.174A2.095 2.095 0 0 0 17.826.435C15.218 0 10.87 0 10 0c-.87 0-5.217 0-7.826.435-.902.15-1.589.837-1.739 1.739C0 4.782 0 9.13 0 10c0 .87 0 5.218.435 7.826.15.902.837 1.589 1.74 1.739C4.782 20 9.13 20 10 20c.87 0 5.218 0 7.826-.435a2.095 2.095 0 0 0 1.74-1.739C20 15.218 20 10.87 20 10c0-2.61 0-5.218-.435-7.826z" />
          <use fill="var(--logius-icon-accent-color,#fff)" fill-rule="nonzero" xlinkHref="#a" />
        </g>
      </svg>
    );
  }
}
