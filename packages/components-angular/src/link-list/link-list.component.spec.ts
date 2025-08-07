import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkListComponent } from './link-list.component';
import { IconComponent } from '../icon/icon.component';
import { LinkListItemComponent } from '../link-list-item/link-list-item.component';
import { LinkListLinkComponent } from '../link-list-link/link-list-link.component';

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
      <li rhc-link-list-item>
        <a rhc-link-list-link href="#"> Link 2 </a>
      </li>
    </rhc-link-list>
  `,
  imports: [LinkListComponent, LinkListLinkComponent, IconComponent, LinkListItemComponent],
})
class LinkListWithChildrenComponent {}

describe('LinkList Component with children', () => {
  let component: LinkListWithChildrenComponent;
  let fixture: ComponentFixture<LinkListWithChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkListWithChildrenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkListWithChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the correct number of LinkListLink elements', () => {
    const linkListElement = fixture.nativeElement.querySelector('ul');
    const linkListLinks = linkListElement.querySelectorAll('li');
    expect(linkListLinks).toHaveLength(2);
  });
});

@Component({
  template: `<rhc-link-list> </rhc-link-list>`,
  imports: [LinkListComponent],
})
class EmptyLinkListComponent {}

describe('Empty LinkList Component', () => {
  let component: EmptyLinkListComponent;
  let fixture: ComponentFixture<EmptyLinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyLinkListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders an empty LinkList when no children are passed', () => {
    const linkListElement = fixture.nativeElement.querySelector('ul');
    expect(linkListElement).toBeEmptyDOMElement();
  });
});
