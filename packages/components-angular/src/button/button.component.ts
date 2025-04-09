import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rhc-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() appearance?: '' | 'primary-action' | 'secondary-action' | 'subtle' = '';
  @Input() disabled?: boolean = false;

  computedClasses = () => `utrecht-button utrecht-button--${this.appearance}`;
}
