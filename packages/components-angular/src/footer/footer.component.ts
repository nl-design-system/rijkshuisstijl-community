import { Component, Input } from '@angular/core';
import { ColumnLayoutComponent } from '../column-layout/column-layout.component';
import { HeadingComponent } from '../heading/heading.component';
import { type HeadingLevel } from '../heading/heading.component';
import { IconComponent } from '../icon/icon.component';
import { LinkListComponent } from '../link-list/link-list.component';
import { LinkListItemComponent } from '../link-list-item/link-list-item.component';
import { LinkListLinkComponent } from '../link-list-link/link-list-link.component';

@Component({
  selector: 'footer[rhc-footer]',
  imports: [
    IconComponent,
    HeadingComponent,
    ColumnLayoutComponent,
    LinkListComponent,
    LinkListItemComponent,
    LinkListLinkComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() background?: string;
  @Input() preFooter?: boolean;
  @Input() preFooterMessage?: string;
  @Input() heading?: string;
  @Input() appearanceLevel: HeadingLevel = 3;
  @Input() backtotop?: boolean;

  scrollBackToTop = (event: MouseEvent) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const targetElement = event.currentTarget as HTMLAnchorElement;
    const targetSelector = targetElement.getAttribute('href');
    if (!targetSelector) return;
    const $target = document.querySelector(targetSelector) as HTMLElement | null;
    if (!$target) return;
    $target.focus({ preventScroll: true }); // Ensure target is focusable, ie via tabindex={-1} on #main
  };
}
