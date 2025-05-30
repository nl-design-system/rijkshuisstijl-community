import { Component } from '@angular/core';
import {
  HeadingComponent,
  IconComponent,
  LinkComponent,
  ParagraphComponent,
} from '@rijkshuisstijl-community/components-angular';
import { FooterComponent } from '@rijkshuisstijl-community/components-angular';
import { PageLayoutComponent } from '../shared/page-layout/page-layout.component';

@Component({
  selector: 'betalingsregeling-template',
  imports: [PageLayoutComponent, HeadingComponent, ParagraphComponent, LinkComponent, IconComponent, FooterComponent],
  templateUrl: './betalingsregeling.component.html',
  styleUrl: './betalingsregeling.component.css',
})
export class BetalingsregelingTemplate {}
