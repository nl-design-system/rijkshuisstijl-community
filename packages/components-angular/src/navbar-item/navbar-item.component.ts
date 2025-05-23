import { Component, Input } from '@angular/core';

@Component({
  selector: 'li[rhc-navbar-item]',
  imports: [],
  templateUrl: './navbar-item.component.html',
  host: {
    '[class.rhc-nav-bar__item]': 'true',
  },
})
export class NavbarItemComponent {
  @Input({ required: true }) href!: string;
}
