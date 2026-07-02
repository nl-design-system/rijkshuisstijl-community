import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
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
      [preFooter]="preFooter"
      [preFooterMessage]="preFooterMessage"
      [tagline]="tagline"
      [heading]="heading"
      [subFooter]="subFooter"
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
  @Input() preFooter = true;
  @Input() preFooterMessage = 'Extra info above footer';
  @Input() tagline = 'Footer tagline';
  @Input() heading?: string;
  @Input() subFooter = true;
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

    component.preFooter = false;
    fixture.detectChanges();
    const spanAfterChange = fixture.nativeElement.querySelector('.rhc-page-prefooter__content');
    expect(spanAfterChange).toBeFalsy();
  });

  it('should display the tagline as plain text instead of a heading', () => {
    const tagline = fixture.nativeElement.querySelector('p.rhc-page-footer__tagline');
    expect(tagline?.textContent).toContain('Footer tagline');
    expect(fixture.nativeElement.querySelector('.rhc-page-footer__tagline rhc-heading')).toBeFalsy();
  });

  it('should display subFooter based on input', () => {
    const subFooterLink = fixture.nativeElement.querySelector('.rhc-page-subfooter-layout');
    expect(subFooterLink).toBeTruthy();

    component.subFooter = false;
    fixture.detectChanges();
    const subFooterLinkAfterChange = fixture.nativeElement.querySelector('.rhc-page-subfooter-layout');
    expect(subFooterLinkAfterChange).toBeFalsy();
  });
});
