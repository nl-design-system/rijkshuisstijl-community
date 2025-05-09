import { Component, Input } from '@angular/core';

@Component({
  selector: 'label[rhc-form-label]',
  imports: [],
  templateUrl: './form-label.component.html',
  host: {
    '[class.utrecht-form-label]': 'true',
    '[class.utrecht-form-label--disabled]': 'disabled',
    '[class.utrecht-form-label--checked]': 'checked',
    '[class.utrecht-form-label--radio]': 'type === "radio"',
    '[class.utrecht-form-label--checkbox]': 'type === "checkbox"',
  },
})
export class FormLabelComponent {
  @Input() disabled?: boolean = false;
  @Input() checked?: boolean = false;
  @Input() type?: 'checkbox' | 'radio';
}
