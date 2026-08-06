import { Component } from '@angular/core';
import {
  FooterComponent,
  HeadingComponent,
  IconComponent,
  LinkListComponent,
  LinkListItemComponent,
  LinkListLinkComponent,
  LogoComponent,
  NavbarComponent,
  NavbarItemComponent,
} from '@rijkshuisstijl-community/components-angular/src/public-api';
import { provideTablerIcons, TablerIconComponent } from 'angular-tabler-icons';
import {
  IconArrowNarrowLeft,
  IconBriefcase,
  IconCamera,
  IconChevronRight,
  IconCurrencyEuro,
  IconDownload,
  IconExclamationCircle,
  IconExternalLink,
  IconHome,
  IconSearch,
  IconUser,
} from 'angular-tabler-icons/icons';

@Component({
  selector: 'page-layout-component',
  imports: [
    IconComponent,
    NavbarComponent,
    NavbarItemComponent,
    LogoComponent,
    FooterComponent,
    TablerIconComponent,
    HeadingComponent,
    LinkListComponent,
    LinkListLinkComponent,
    LinkListItemComponent,
  ],
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css'],
  providers: [
    provideTablerIcons({
      IconSearch,
      IconHome,
      IconCurrencyEuro,
      IconUser,
      IconCamera,
      IconDownload,
      IconBriefcase,
      IconArrowNarrowLeft,
      IconExternalLink,
      IconExclamationCircle,
      IconChevronRight,
    }),
  ],
})
export class PageLayoutComponent {}
