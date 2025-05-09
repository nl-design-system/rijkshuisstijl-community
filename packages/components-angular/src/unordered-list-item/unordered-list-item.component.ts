import { Component } from '@angular/core';

@Component({
  selector: 'li[rhc-unordered-list-item]',
  imports: [],
  templateUrl: './unordered-list-item.component.html',
  host: {
    '[class.utrecht-unordered-list__item]': 'true',
  },
})
export class UnorderedListItemComponent {}
