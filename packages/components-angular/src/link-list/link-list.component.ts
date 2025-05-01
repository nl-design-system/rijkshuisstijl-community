import { Component, Input } from '@angular/core';

@Component({
  selector: 'rhc-link-list',
  imports: [],
  templateUrl: './link-list.component.html',
})
export class LinkListComponent {
  @Input() linkListLinks: { href: string; label: string; icon?: string }[] = [];
}
