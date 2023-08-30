/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'rhc-card',
  styleUrl: './card.scss',
  shadow: true,
})
export class Card {
  render() {
    return (
      <div class="rhc-card">
        <slot></slot>
      </div>
    );
  }
}
