import { Component, Input } from '@angular/core';

@Component({
  selector: 'rhc-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() showEndItems?: boolean = false;
}
