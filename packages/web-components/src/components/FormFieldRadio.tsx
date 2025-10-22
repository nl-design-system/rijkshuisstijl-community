import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { FormFieldRadio, FormFieldRadioProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type FormFieldRadioAttributes = FormFieldRadioProps;

export class FormFieldRadioWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-form-radio';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    const { label, description, errormessage, status, invalid, inputinvalid, disabled, checked, dir, ...restProps } =
      this.props;

    render(
      <FormFieldRadio
        checked={(checked === 'true') as FormFieldRadioAttributes['checked']}
        description={(description as FormFieldRadioAttributes['description']) ?? undefined}
        dir={(dir as FormFieldRadioAttributes['dir']) ?? undefined}
        disabled={(disabled === 'true') as FormFieldRadioAttributes['disabled']}
        errorMessage={(errormessage as FormFieldRadioAttributes['errorMessage']) ?? undefined}
        inputInvalid={(inputinvalid === 'true') as FormFieldRadioAttributes['inputInvalid']}
        invalid={(invalid === 'true') as FormFieldRadioAttributes['invalid']}
        label={(label as FormFieldRadioAttributes['label']) ?? undefined}
        status={(status as FormFieldRadioAttributes['status']) ?? undefined}
        {...restProps}
      />,
      this.shadowRoot,
    );
  }
}
