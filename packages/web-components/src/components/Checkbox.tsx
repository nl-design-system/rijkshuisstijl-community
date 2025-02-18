import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { Checkbox, CheckboxProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type CheckboxWebComponentAttributes = CheckboxProps;

export class CheckboxWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-checkbox';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    const { appearance, disabled, indeterminate, inputrequired, invalid, required, classname, checked, ...restProps } =
      this.props;

    render(
      <Checkbox
        appearance={(appearance as CheckboxWebComponentAttributes['appearance']) ?? undefined}
        checked={(checked === 'true') as CheckboxWebComponentAttributes['checked']}
        className={(classname as CheckboxWebComponentAttributes['className']) ?? undefined}
        disabled={(disabled === 'true') as CheckboxWebComponentAttributes['disabled']}
        indeterminate={(indeterminate === 'true') as CheckboxWebComponentAttributes['indeterminate']}
        inputRequired={(inputrequired === 'true') as CheckboxWebComponentAttributes['inputRequired']}
        invalid={(invalid === 'true') as CheckboxWebComponentAttributes['invalid']}
        required={(required === 'true') as CheckboxWebComponentAttributes['required']}
        {...restProps}
      />,
      this.shadowRoot,
    );
  }
}
