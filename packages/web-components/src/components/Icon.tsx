import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Icon, IconProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';
import iconStylesheet from './Icon.css?inline';

export type IconWebComponentAttributes = IconProps;

export class IconWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-icon';

  constructor() {
    super(stylesheet + iconStylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    const { icon, classname } = this.props;

    render(
      <Icon
        className={classname as IconWebComponentAttributes['className']}
        icon={icon as IconWebComponentAttributes['icon']}
        {...this.props}
      >
        <slot />
      </Icon>,
      this.shadowRoot,
    );
  }
}
