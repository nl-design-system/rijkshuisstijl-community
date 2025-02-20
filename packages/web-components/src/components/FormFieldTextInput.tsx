import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { FormFieldTextInput, FormFieldTextInputProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type FormFieldTextInputAttributes = FormFieldTextInputProps;

export class FormFieldTextInputWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-form-textinput';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    const {
      label,
      disabled,
      invalid,
      defaultvalue,
      errormessage,
      required,
      inputrequired,
      autocomplete,
      readonly,
      inputdir,
      minlength,
      maxlength,
      ...restProps
    } = this.props;

    render(
      <FormFieldTextInput
        autoComplete={(autocomplete as FormFieldTextInputAttributes['autoComplete']) ?? undefined}
        defaultValue={(defaultvalue as FormFieldTextInputAttributes['defaultValue']) ?? undefined}
        disabled={(disabled === 'true') as FormFieldTextInputAttributes['disabled']}
        errorMessage={(errormessage as FormFieldTextInputAttributes['errorMessage']) ?? undefined}
        inputDir={(inputdir as FormFieldTextInputAttributes['inputDir']) ?? undefined}
        inputRequired={(inputrequired === 'true') as FormFieldTextInputAttributes['inputRequired']}
        invalid={(invalid === 'true') as FormFieldTextInputAttributes['invalid']}
        label={(label as FormFieldTextInputAttributes['label']) ?? undefined}
        maxLength={(maxlength as FormFieldTextInputAttributes['maxLength']) ?? undefined}
        minLength={(minlength as FormFieldTextInputAttributes['minLength']) ?? undefined}
        readOnly={(readonly === 'true') as FormFieldTextInputAttributes['readOnly']}
        required={(required === 'true') as FormFieldTextInputAttributes['required']}
        {...restProps}
      >
        <slot />
      </FormFieldTextInput>,
      this.shadowRoot,
    );
  }
}
