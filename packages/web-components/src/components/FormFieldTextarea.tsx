import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { FormFieldTextarea, FormFieldTextareaProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type FormFieldTextareaAttributes = FormFieldTextareaProps;

export class FormFieldTextareaWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-form-textarea';

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
      minlength,
      maxlength,
      ...restProps
    } = this.props;

    console.log('this.props', this.props);

    render(
      <FormFieldTextarea
        autoComplete={(autocomplete as FormFieldTextareaAttributes['autoComplete']) ?? undefined}
        defaultValue={(defaultvalue as FormFieldTextareaAttributes['defaultValue']) ?? undefined}
        disabled={(disabled === 'true') as FormFieldTextareaAttributes['disabled']}
        errorMessage={(errormessage as FormFieldTextareaAttributes['errorMessage']) ?? undefined}
        inputRequired={(inputrequired === 'true') as FormFieldTextareaAttributes['inputRequired']}
        invalid={(invalid === 'true') as FormFieldTextareaAttributes['invalid']}
        label={(label as FormFieldTextareaAttributes['label']) ?? undefined}
        maxLength={(maxlength as FormFieldTextareaAttributes['maxLength']) ?? undefined}
        minLength={(minlength as FormFieldTextareaAttributes['minLength']) ?? undefined}
        readOnly={(readonly === 'true') as FormFieldTextareaAttributes['readOnly']}
        required={(required === 'true') as FormFieldTextareaAttributes['required']}
        {...restProps}
      >
        <slot />
      </FormFieldTextarea>,
      this.shadowRoot,
    );
  }
}
