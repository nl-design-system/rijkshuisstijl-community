import { Component } from '@angular/core';
import { IconComponent } from '../../../../../components-angular/src/icon/icon.component';
import { NavbarComponent } from '../../../../../components-angular/src/navbar/navbar.component';
import { NavbarItemComponent } from '../../../../../components-angular/src/navbar-item/navbar-item.component';

@Component({
  selector: 'page-layout-component',
  imports: [IconComponent, NavbarComponent, NavbarItemComponent],
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css'],
})
export class PageLayoutComponent {}
