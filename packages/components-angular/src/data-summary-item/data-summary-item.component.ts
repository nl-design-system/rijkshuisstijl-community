import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'rhc-data-summary-item',
  imports: [CommonModule, LinkComponent],
  templateUrl: './data-summary-item.component.html',
  styleUrl: './data-summary-item.component.css',
})
export class DataSummaryItemComponent {
  @Input() key: string = '';
  @Input() value: string = '';
  @Input() href?: string;
  @Input() actionLabel?: string;
  @Input() appearance: 'Column' | 'Row' = 'Column';
}
