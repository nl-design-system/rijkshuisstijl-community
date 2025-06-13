import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'div[rhc-data-summary-item]',
  imports: [CommonModule, LinkComponent],
  templateUrl: './data-summary-item.component.html',
  host: {
    '[class.rhc-data-summary__item]': 'true',
  },
})
export class DataSummaryItemComponent {
  @Input() key: string = '';
  @Input() value: string = '';
  @Input() href?: string;
  @Input() target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' = '_self';
  @Input() actionLabel?: string;
}
