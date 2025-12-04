import { Component } from '@angular/core';

@Component({
  selector: 'li[rhc-link-list-item]',
  imports: [],
  templateUrl: './link-list-item.component.html',
  host: {
    '[class.utrecht-link-list__item]': 'true',
  },
})
export class LinkListItemComponent {}
