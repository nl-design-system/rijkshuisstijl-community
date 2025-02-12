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

    const { attribution, variation, ...restProps } = this.props;

    render(
      <Blockquote
        attribution={(attribution as BlockquoteWebComponentAttributes['attribution']) ?? undefined}
        variation={(variation as BlockquoteWebComponentAttributes['variation']) ?? undefined}
        {...restProps}
      >
        <slot />
      </Blockquote>,
      this.shadowRoot,
    );
  }
}
