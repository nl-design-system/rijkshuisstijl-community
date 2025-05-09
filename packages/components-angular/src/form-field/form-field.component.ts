import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rhc-form-field',
  imports: [NgClass],
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent {
  @Input() type?: 'checkbox' | 'radio' | 'text';
  @Input() class?: string;
  @Input() invalid?: boolean = false;
  @Input() showInput?: boolean = true;
  @Input() showLabel?: boolean = true;
  @Input() showDescription?: boolean = false;

  constructor() {}
}
