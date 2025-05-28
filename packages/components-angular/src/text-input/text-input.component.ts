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
    '[attr.required]': 'required ? "required": null',
    '[attr.readonly]': 'readonly ? "readonly" : null',
  },
})
export class TextInputComponent {
  @Input() disabled? = false;
  @Input() invalid? = false;
  @Input() required? = false;
  @Input() readonly? = false;
}
