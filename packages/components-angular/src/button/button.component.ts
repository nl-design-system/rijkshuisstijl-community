import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[rhc-button]',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  host: {
    '[class.utrecht-button]': 'true',
    '[class.utrecht-button--primary-action]': 'appearance === "primary-action"',
    '[class.utrecht-button--secondary-action]': 'appearance === "secondary-action"',
    '[class.utrecht-button--subtle-action]': 'appearance === "subtle"',
    '[attr.disabled]': 'disabled ? "disabled" : null',
  },
})
export class ButtonComponent {
  @Input() appearance?: '' | 'primary-action' | 'secondary-action' | 'subtle' = '';
  @Input() disabled?: boolean = false;
}
