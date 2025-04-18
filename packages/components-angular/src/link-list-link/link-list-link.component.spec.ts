import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkListLinkComponent } from './link-list-link.component';
import { IconComponent } from '../icon/icon.component';
import { LinkListComponent } from '../link-list/link-list.component';
import { LinkListItemComponent } from '../link-list-item/link-list-item.component';

@Component({
  template: `
    <rhc-link-list>
      <li rhc-link-list-item>
        <a rhc-link-list-link href="#">
          <rhc-icon icon="chevron-right" />
          Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
        </a>
      </li>
    </rhc-link-list>
  `,
  imports: [LinkListLinkComponent, IconComponent, LinkListComponent, LinkListItemComponent],
})
class LinkListLinkWithIconComponent {}

describe('LinkListLink with icon component', () => {
  let component: LinkListLinkWithIconComponent;
  let fixture: ComponentFixture<LinkListLinkWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkListLinkWithIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkListLinkWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an icon and text when provided', () => {
    const linkListLinkElement = fixture.nativeElement.querySelector('li');
    expect(linkListLinkElement).toHaveTextContent('Learn about joi de vivre, an essential foreign phrase!');
    expect(linkListLinkElement.querySelector('rhc-icon')).toBeTruthy();
  });
});
