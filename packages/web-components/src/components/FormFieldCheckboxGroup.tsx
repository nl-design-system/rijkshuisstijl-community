import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { FormFieldCheckboxGroup, FormFieldCheckboxGroupProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type FormFieldCheckboxGroupAttributes = FormFieldCheckboxGroupProps;

export class FormFieldCheckboxGroupWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-form-checkbox-group';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    const { label, description, errormessage, status, invalid, dir, ...restProps } = this.props;

    render(
      <FormFieldCheckboxGroup
        description={(description as FormFieldCheckboxGroupAttributes['description']) ?? undefined}
        dir={(dir as FormFieldCheckboxGroupAttributes['dir']) ?? undefined}
        errorMessage={(errormessage as FormFieldCheckboxGroupAttributes['errorMessage']) ?? undefined}
        invalid={(invalid === 'true') as FormFieldCheckboxGroupAttributes['invalid']}
        label={(label as FormFieldCheckboxGroupAttributes['label']) ?? undefined}
        status={(status as FormFieldCheckboxGroupAttributes['status']) ?? undefined}
        {...restProps}
      >
        <slot />
      </FormFieldCheckboxGroup>,
      this.shadowRoot,
    );
  }
}
