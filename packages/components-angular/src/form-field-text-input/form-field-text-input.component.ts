import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';
import { FormFieldDescriptionComponent } from '../form-field-description/form-field-description.component';
import { FormFieldErrorMessageComponent } from '../form-field-error-message/form-field-error-message.component';
import { FormLabelComponent } from '../form-label/form-label.component';
import { TextInputComponent } from '../text-input/text-input.component';

export type TextInputTypes =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

@Component({
  selector: 'rhc-form-field-text-input',
  imports: [
    FormFieldComponent,
    FormLabelComponent,
    TextInputComponent,
    FormFieldErrorMessageComponent,
    FormFieldDescriptionComponent,
  ],
  templateUrl: './form-field-text-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldTextInputComponent),
      multi: true,
    },
  ],
})
export class FormFieldTextInputComponent implements ControlValueAccessor {
  @Input() invalid?: boolean = false;
  @Input() showDescription?: boolean = false;
  @Input() label?: string;
  @Input() errorMessage?: string;
  @Input() description?: string;
  @Input() status?: string;
  /**
   * Whether the input is required. Maps to the HTML `aria-required` attribute.
   * Use this if you want to use Angular validation (recommended).
   */
  @Input() required?: boolean = false;
  /**
   * Maps to the HTML `required` attribute.
   * Use this if you want to use HTML validation (not recommended).
   */
  @Input() inputRequired?: boolean = false;
  @Input() readonly?: boolean = false;
  @Input() dir?: 'auto' | 'ltr' | 'rtl' = 'auto';
  @Input() name?: string;
  @Input() autocomplete?: string;
  @Input() placeholder?: string;
  @Input() size?: number;
  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() min?: number;
  @Input() max?: number;
  @Input() step?: number;
  @Input() type?: TextInputTypes = 'text';
  @Input({ required: true }) inputId!: string;

  value: string = '';
  disabled: boolean = false;

  private onChange: Function = () => {};
  private onTouched: Function = () => {};

  onValueChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  markAsTouched(): void {
    this.onTouched();
  }

  writeValue(value: string): void {
    this.value = value;
  }

  // eslint-disable-next-line no-unused-vars
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
