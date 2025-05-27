import { Component } from '@angular/core';
import {
  HeadingComponent,
  IconComponent,
  LinkComponent,
  ParagraphComponent,
} from '@rijkshuisstijl-community/components-angular';
import { ShellComponent } from '../shared/shell/shell.component';

@Component({
  selector: 'betalingsregeling-template',
  imports: [ShellComponent, HeadingComponent, ParagraphComponent, LinkComponent, IconComponent],
  templateUrl: './betalingsregeling.component.html',
})
export class BetalingsregelingTemplate {}
