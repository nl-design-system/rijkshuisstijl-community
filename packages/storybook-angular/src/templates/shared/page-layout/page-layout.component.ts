import { Component } from '@angular/core';
import {
  DutchMapIconComponent,
  FooterComponent,
  IconComponent,
  LogoComponent,
  NavbarComponent,
  NavbarItemComponent,
} from '@rijkshuisstijl-community/components-angular/src/public-api';

@Component({
  selector: 'page-layout-component',
  imports: [IconComponent, NavbarComponent, NavbarItemComponent, LogoComponent, DutchMapIconComponent, FooterComponent],
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css'],
})
export class PageLayoutComponent {}
