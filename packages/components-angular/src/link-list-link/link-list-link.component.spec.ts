import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkListLinkComponent } from './link-list-link.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  template: `
    <rhc-link-list-link href="#">
      <rhc-icon icon="chevron-right" />
      Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
    </rhc-link-list-link>
  `,
  imports: [LinkListLinkComponent, IconComponent],
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
