import { Component, Input } from '@angular/core';

@Component({
  selector: 'ul[rhc-unordered-list]',
  imports: [],
  templateUrl: './unordered-list.component.html',
  host: {
    '[class.utrecht-unordered-list]': 'true',
    '[class.utrecht-unordered-list--nested]': 'nested',
  },
})
export class UnorderedListComponent {
  @Input() nested?: boolean = false;
}
