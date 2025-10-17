import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { FormFieldCheckboxOption, FormFieldCheckboxOptionProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type FormFieldCheckboxOptionAttributes = FormFieldCheckboxOptionProps;

export class FormFieldCheckboxOptionWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-form-checkbox-option';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    const { label, description, invalid, inputinvalid, errormessage, disabled, ...restProps } = this.props;

    render(
      <FormFieldCheckboxOption
        description={(description as FormFieldCheckboxOptionAttributes['description']) ?? undefined}
        disabled={(disabled === 'true') as FormFieldCheckboxOptionAttributes['disabled']}
        errorMessage={(errormessage as FormFieldCheckboxOptionAttributes['errorMessage']) ?? undefined}
        inputInvalid={(inputinvalid === 'true') as FormFieldCheckboxOptionAttributes['inputInvalid']}
        invalid={(invalid === 'true') as FormFieldCheckboxOptionAttributes['invalid']}
        label={(label as FormFieldCheckboxOptionAttributes['label']) ?? undefined}
        {...restProps}
      />,
      this.shadowRoot,
    );
  }
}
