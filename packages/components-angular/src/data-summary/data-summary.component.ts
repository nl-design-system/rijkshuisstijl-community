import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rhc-data-summary',
  imports: [CommonModule],
  templateUrl: './data-summary.component.html',
})
export class DataSummaryComponent {
  @Input() appearance: 'Column' | 'Row' = 'Column';
}
