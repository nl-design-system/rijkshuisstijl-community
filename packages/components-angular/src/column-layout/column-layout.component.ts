import { Component, Input } from '@angular/core';

@Component({
  selector: 'rhc-column-layout',
  imports: [],
  templateUrl: './column-layout.component.html',
})
export class ColumnLayoutComponent {
  @Input() rule?: boolean = false;
}
