import { Component } from '@angular/core';
import { IconComponent } from '../../../../../components-angular/src/icon/icon.component';
import { NavbarComponent } from '../../../../../components-angular/src/navbar/navbar.component';
import { NavbarItemComponent } from '../../../../../components-angular/src/navbar-item/navbar-item.component';

@Component({
  selector: 'shell-component',
  imports: [IconComponent, NavbarComponent, NavbarItemComponent],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
})
export class ShellComponent {}
