import { Component } from '@angular/core';
import { TablerIconComponent } from 'angular-tabler-icons';
import { HeadingComponent, IconComponent, LinkComponent, ParagraphComponent } from '../../../../components-angular';
import { PageLayoutComponent } from '../shared/page-layout/page-layout.component';

@Component({
  selector: 'betalingsregeling-template',
  imports: [
    PageLayoutComponent,
    HeadingComponent,
    ParagraphComponent,
    LinkComponent,
    IconComponent,
    TablerIconComponent,
  ],
  templateUrl: './betalingsregeling.component.html',
  styleUrl: './betalingsregeling.component.css',
})
export class BetalingsregelingTemplate {}
