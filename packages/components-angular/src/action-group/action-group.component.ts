import { Component, Input } from '@angular/core';

@Component({
  selector: 'rhc-action-group',
  imports: [],
  templateUrl: './action-group.component.html',
})
export class ActionGroupComponent {
  @Input() direction: 'column' | 'row' | 'column-stretch' = 'row';
}
