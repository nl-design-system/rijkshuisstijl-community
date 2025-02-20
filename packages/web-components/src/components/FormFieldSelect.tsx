import stylesheet from '@rijkshuisstijl-community/components-css/dist/index.css?inline';
import { FormFieldSelect, FormFieldSelectProps } from '@rijkshuisstijl-community/components-react';
import { render } from 'preact';
import { BaseWebComponent } from './BaseComponent';

export type FormFieldSelectAttributes = FormFieldSelectProps;

export class FormFieldSelectWebComponent extends BaseWebComponent {
  static override readonly tagName: string = 'rhc-form-select';

  constructor() {
    super(stylesheet);
  }

  render(): void {
    if (!this.shadowRoot) return;

    const { label, description, disabled, status, invalid, options, dir, defaultvalue, value, name, ...restProps } =
      this.props;

    render(
      <FormFieldSelect
        defaultValue={(defaultvalue as FormFieldSelectAttributes['defaultValue']) ?? undefined}
        description={(description as FormFieldSelectAttributes['description']) ?? undefined}
        dir={(dir as FormFieldSelectAttributes['dir']) ?? undefined}
        disabled={(disabled === 'true') as FormFieldSelectAttributes['disabled']}
        invalid={(invalid === 'true') as FormFieldSelectAttributes['invalid']}
        label={(label as FormFieldSelectAttributes['label']) ?? undefined}
        name={(name as FormFieldSelectAttributes['name']) ?? undefined}
        options={(options && JSON.parse(options as string)) as FormFieldSelectAttributes['options']}
        status={(status as FormFieldSelectAttributes['status']) ?? undefined}
        value={(value as FormFieldSelectAttributes['value']) ?? undefined}
        {...restProps}
      >
        <slot />
      </FormFieldSelect>,
      this.shadowRoot,
    );
  }
}
