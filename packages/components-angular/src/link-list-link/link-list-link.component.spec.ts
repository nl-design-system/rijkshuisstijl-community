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
          <rhc-icon
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </rhc-icon>

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
