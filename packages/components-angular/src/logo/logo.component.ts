/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'figure[rhc-logo]',
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  host: { '[class.rhc-logo]': 'true' },
})
export class LogoComponent {
  @Input({ required: true }) organisation!: string;
  @Input({ required: false }) subtitle?: string | null;
}
