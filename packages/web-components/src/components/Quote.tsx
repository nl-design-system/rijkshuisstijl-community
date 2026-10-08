import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Quote, QuoteProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type QuoteWebComponentAttributes = QuoteProps;

export class QuoteWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-quote';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    const { heading, headinglevel, headingappearancelevel, ...restProps } = this.props;

    render(
      <Quote
        heading={heading as QuoteWebComponentAttributes['heading']}
        headingLevel={(headinglevel && Number(headinglevel)) as QuoteWebComponentAttributes['headingLevel']}
        headingAppearanceLevel={
          (headingappearancelevel &&
            Number(headingappearancelevel)) as QuoteWebComponentAttributes['headingAppearanceLevel']
        }
        {...restProps}
      >
        <slot />
      </Quote>,
      this.shadowRoot,
    );
  }
}
