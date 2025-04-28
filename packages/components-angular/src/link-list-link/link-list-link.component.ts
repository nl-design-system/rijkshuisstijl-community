import { Component, Input } from '@angular/core';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'li[rhc-link-list-link]',
  imports: [LinkComponent],
  templateUrl: './link-list-link.component.html',
  providers: [],
  host: {
    '[class.utrecht-link-list__item]': 'true',
  },
})
export class LinkListLinkComponent {
  @Input({ required: true }) href!: string;
}
