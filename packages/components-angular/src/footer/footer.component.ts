import { Component, Input } from '@angular/core';
import { ColumnLayoutComponent } from '../column-layout/column-layout.component';
import { HeadingComponent } from '../heading/heading.component';
import { type HeadingLevel } from '../heading/heading.component';

@Component({
  selector: 'footer[rhc-footer]',
  imports: [HeadingComponent, ColumnLayoutComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() background: 'primary-filled' | 'primary-outlined' = 'primary-filled';
  @Input() preFooter?: boolean;
  @Input() preFooterMessage?: string;
  @Input() heading?: string;
  @Input() appearanceLevel: HeadingLevel = 3;
  @Input() subFooter?: boolean;

  get backgroundClass(): string {
    return `rhc-page-footer--${this.background}`;
  }
}
