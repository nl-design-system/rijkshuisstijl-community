import { Component, Input } from '@angular/core';

@Component({
  selector: 'a[rhc-link-list-link]',
  imports: [],
  templateUrl: './link-list-link.component.html',
  host: {
    '[class.utrecht-link-list__link]': 'true',
    '[class.utrecht-link]': 'true',
    '[utrecht-link--html-a]': 'true',
  },
})
export class LinkListLinkComponent {
  @Input({ required: true }) href!: string;
}
