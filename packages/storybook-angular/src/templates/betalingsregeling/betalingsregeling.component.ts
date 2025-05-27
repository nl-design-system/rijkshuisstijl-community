import { Component } from '@angular/core';
import {
  HeadingComponent,
  IconComponent,
  LinkComponent,
  ParagraphComponent,
} from '@rijkshuisstijl-community/components-angular';
import { PageLayoutComponent } from '../shared/shell/page-layout.component';

@Component({
  selector: 'betalingsregeling-template',
  imports: [PageLayoutComponent, HeadingComponent, ParagraphComponent, LinkComponent, IconComponent],
  templateUrl: './betalingsregeling.component.html',
  styleUrl: './betalingsregeling.component.css',
})
export class BetalingsregelingTemplate {}
