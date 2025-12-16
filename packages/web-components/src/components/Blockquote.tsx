/**
 * @license EUPL-1.2
 * Copyright (c) 2025 Community for NL Design System
 */

import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Blockquote, BlockquoteProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type BlockquoteWebComponentAttributes = BlockquoteProps;

export class BlockquoteWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-blockquote';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;
    render(
      <Blockquote {...(this.props as BlockquoteWebComponentAttributes)}>
        <slot />
      </Blockquote>,
      this.shadowRoot,
    );
  }
}
