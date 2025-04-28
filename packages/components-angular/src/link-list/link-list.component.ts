import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { LinkListLinkComponent } from '../link-list-link/link-list-link.component';

@Component({
  selector: 'rhc-link-list',
  imports: [LinkListLinkComponent, IconComponent],
  templateUrl: './link-list.component.html',
})
export class LinkListComponent {
  @Input() linkListLinks: { href: string; label: string; icon?: string }[] = [];
}
