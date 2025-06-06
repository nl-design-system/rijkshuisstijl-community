import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Column, FooterComponent, subFooter } from './footer.component';
import { ColumnLayoutComponent } from '../column-layout/column-layout.component';
import { HeadingComponent } from '../heading/heading.component';
import { IconComponent } from '../icon/icon.component';
import { LinkListComponent } from '../link-list/link-list.component';
import { LinkListItemComponent } from '../link-list-item/link-list-item.component';
import { LinkListLinkComponent } from '../link-list-link/link-list-link.component';

@Component({
  template: `
    <footer
      rhc-footer
      [background]="background"
      [preFooter]="preFooter"
      [preFooterMessage]="preFooterMessage"
      [heading]="heading"
      [appearanceLevel]="appearanceLevel"
      [columns]="columns"
      [subFooter]="subFooter"
      [backtotop]="backtotop"
    ></footer>
  `,
  standalone: true,
  imports: [
    FooterComponent,
    ColumnLayoutComponent,
    HeadingComponent,
    IconComponent,
    LinkListComponent,
    LinkListItemComponent,
    LinkListLinkComponent,
  ],
})
class FooterTestHostComponent {
  @Input() background = 'primary';
  @Input() preFooter = true;
  @Input() preFooterMessage = 'Extra info above footer';
  @Input() heading = 'Footer heading';
  @Input() appearanceLevel = 3;
  @Input() columns: Column[] = [
    {
      heading: 'Column 1',
      appearanceLevel: 3,
      items: [
        { label: 'Link A', href: '/a' },
        { label: 'Link B', href: '/b' },
      ],
    },
  ];
  @Input() subFooter: subFooter = {
    items: [{ label: 'Sub link', href: '/sub' }],
  };
  @Input() backtotop = true;
}
describe('FooterComponent in host context', () => {
  let fixture: ComponentFixture<FooterTestHostComponent>;
  let component: FooterTestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterTestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterTestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the host component with footer', () => {
    expect(component).toBeTruthy();
  });

  it('should render the pre-footer message', () => {
    const span = fixture.nativeElement.querySelector('.rhc-page-prefooter__content');
    expect(span.textContent).toContain('Extra info above footer');
  });

  it('should display the heading and one column section', () => {
    const heading = fixture.nativeElement.querySelector('.rhc-page-footer__title rhc-heading');
    expect(heading?.textContent).toContain('Footer heading');

    const columnHeading = fixture.nativeElement.querySelector('.rhc-page-footer__section rhc-heading');
    expect(columnHeading?.textContent).toContain('Column 1');
  });

  it('should display subFooter and back-to-top link', () => {
    const subFooterLink = fixture.nativeElement.querySelector('.rhc-page-subfooter__content a');
    expect(subFooterLink?.textContent).toContain('Sub link');

    const backToTop = fixture.nativeElement.querySelector('.rhc-page-subfooter__backtotop');
    expect(backToTop?.textContent).toContain('Terug naar boven');
  });
});
