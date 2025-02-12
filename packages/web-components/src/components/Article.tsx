import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Article, ArticleProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type ArticleWebComponentAttributes = ArticleProps;

export class ArticleWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-article';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    render(
      <Article {...this.props}>
        <slot />
      </Article>,
      this.shadowRoot,
    );
  }
}
