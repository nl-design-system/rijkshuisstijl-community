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

    console.log('this.props', this.props);

    render(
      <Checkbox
        appearance={(appearance as CheckboxWebComponentAttributes['appearance']) ?? undefined}
        checked={Boolean(checked) as CheckboxWebComponentAttributes['checked']}
        className={(classname as CheckboxWebComponentAttributes['className']) ?? undefined}
        disabled={Boolean(disabled) as CheckboxWebComponentAttributes['disabled']}
        indeterminate={Boolean(indeterminate) as CheckboxWebComponentAttributes['indeterminate']}
        inputRequired={Boolean(inputrequired) as CheckboxWebComponentAttributes['inputRequired']}
        invalid={Boolean(invalid) as CheckboxWebComponentAttributes['invalid']}
        required={Boolean(required) as CheckboxWebComponentAttributes['required']}
        {...restProps}
      />,
      this.shadowRoot,
    );
  }
}
