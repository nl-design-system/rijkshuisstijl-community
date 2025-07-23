import { Component, Input } from '@angular/core';

@Component({
  selector: 'input[rhc-text-input]',
  imports: [],
  templateUrl: './text-input.component.html',
  host: {
    '[class.utrecht-textbox]': 'true',
    '[class.utrecht-textbox--html-input]': 'true',
    '[class.utrecht-textbox--disabled]': 'disabled',
    '[class.utrecht-textbox--invalid]': 'invalid',
    '[class.utrecht-textbox--readonly]': 'readonly',
    '[class.utrecht-textbox--required]': 'required',
    '[attr.aria-invalid]': 'invalid || undefined',
    '[attr.disabled]': 'disabled ? "disabled": null',
    '[attr.required]': 'inputRequired ? "required": null',
    '[attr.aria-required]': 'required ? "true" : null',
    '[attr.readonly]': 'readonly ? "readonly" : null',
  },
})
export class TextInputComponent {
  @Input() disabled? = false;
  @Input() invalid? = false;
  /**
   * Whether the input is required. Maps to the HTML `aria-required` attribute.
   * Use this if you want to use Angular validation (recommended).
   */
  @Input() required? = false;
  /**
   * Maps to the HTML `required` attribute.
   * Use this if you want to use HTML validation (not recommended).
   */
  @Input() inputRequired? = false;
  @Input() readonly? = false;
}
