import { Component, Input } from '@angular/core';
import { ColumnLayoutComponent } from '../column-layout/column-layout.component';

@Component({
  selector: 'footer[rhc-footer]',
  imports: [ColumnLayoutComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() preFooter?: boolean;
  @Input() preFooterMessage?: string;
  @Input() heading?: string;
  @Input() headingId = 'page-footer-heading';
  @Input() tagline?: string;
  @Input() subFooter?: boolean;
}
