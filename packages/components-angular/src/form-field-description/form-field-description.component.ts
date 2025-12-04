import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rhc-form-field-description',
  imports: [NgClass],
  templateUrl: './form-field-description.component.html',
})
export class FormFieldDescriptionComponent {
  @Input() invalid?: boolean = false;
  @Input() valid?: boolean = false;
  @Input() warning?: boolean = false;
  @Input() class?: string;
}
