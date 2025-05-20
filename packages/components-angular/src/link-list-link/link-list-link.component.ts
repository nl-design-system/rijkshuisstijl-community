import { Component, Input } from '@angular/core';

@Component({
  selector: 'a[rhc-link-list-link]',
  imports: [],
  templateUrl: './link-list-link.component.html',
  host: {
    '[class.utrecht-link-list__link]': 'true',
    '[class.nl-link]': 'true',
  },
})
export class LinkListLinkComponent {
  @Input({ required: true }) href!: string;
}
