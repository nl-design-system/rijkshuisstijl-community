import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'figure[rhc-logo]',
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  host: {
    '[class.rhc-logo]': 'true',
  },
})
export class LogoComponent {
  @Input() organisation?: string;
  @Input() subtitle?: string;
}
