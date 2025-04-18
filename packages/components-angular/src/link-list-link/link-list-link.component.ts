import { Component, Input } from '@angular/core';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'rhc-link-list-link',
  imports: [LinkComponent],
  templateUrl: './link-list-link.component.html',
  providers: [],
})
export class LinkListLinkComponent {
  @Input({ required: true }) href!: string;
}
