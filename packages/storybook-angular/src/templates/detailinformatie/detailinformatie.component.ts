import { Component } from '@angular/core';
import { TablerIconComponent } from 'angular-tabler-icons';
import {
  ActionGroupComponent,
  ButtonComponent,
  DataSummaryComponent,
  DataSummaryItemComponent,
  HeadingComponent,
  IconComponent,
  LinkComponent,
  ParagraphComponent,
} from '../../../../components-angular/src/public-api';
import { PageLayoutComponent } from '../shared/page-layout/page-layout.component';

@Component({
  selector: 'detailinformatie-template',
  templateUrl: './detailinformatie.component.html',
  imports: [
    PageLayoutComponent,
    ActionGroupComponent,
    ButtonComponent,
    IconComponent,
    HeadingComponent,
    ParagraphComponent,
    LinkComponent,
    DataSummaryComponent,
    DataSummaryItemComponent,
    TablerIconComponent,
  ],
  styleUrl: './detailinformatie.component.css',
})
export class DetailinformatieTemplate {}
