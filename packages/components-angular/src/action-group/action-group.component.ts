/**
 * @license EUPL-1.2
 * Copyright (c) 2025 Community for NL Design System
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'rhc-action-group',
  imports: [],
  templateUrl: './action-group.component.html',
})
export class ActionGroupComponent {
  @Input() direction: 'column' | 'row' | 'column-stretch' = 'row';
}
