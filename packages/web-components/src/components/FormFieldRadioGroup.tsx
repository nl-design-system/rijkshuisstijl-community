import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { FormFieldRadioGroup, FormFieldRadioGroupProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type FormFieldRadioGroupAttributes = FormFieldRadioGroupProps;

export class FormFieldRadioGroupWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-form-radio-group';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    const { label, description, errormessage, status, invalid, dir, ...restProps } = this.props;

    render(
      <FormFieldRadioGroup
        description={(description as FormFieldRadioGroupAttributes['description']) ?? undefined}
        dir={(dir as FormFieldRadioGroupAttributes['dir']) ?? undefined}
        errorMessage={(errormessage as FormFieldRadioGroupAttributes['errorMessage']) ?? undefined}
        invalid={(invalid === 'true') as FormFieldRadioGroupAttributes['invalid']}
        label={(label as FormFieldRadioGroupAttributes['label']) ?? undefined}
        status={(status as FormFieldRadioGroupAttributes['status']) ?? undefined}
        {...restProps}
      >
        <slot />
      </FormFieldRadioGroup>,
      this.shadowRoot,
    );
  }
}
