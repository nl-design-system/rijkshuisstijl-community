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
  @Input() background: 'primary-filled' | 'primary-outlined' = 'primary-filled';
  @Input() preFooter = true;
  @Input() preFooterMessage = 'Extra info above footer';
  @Input() heading = 'Footer heading';
  @Input() appearanceLevel = 3;
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

  it('should display the heading', () => {
    const heading = fixture.nativeElement.querySelector('.rhc-page-footer__title rhc-heading');
    expect(heading?.textContent).toContain('Footer heading');
  });

  it('should display subFooter based on input', () => {
    const subFooterLink = fixture.nativeElement.querySelector('.rhc-page-subfooter');
    expect(subFooterLink).toBeTruthy();

    component.subFooter = false;
    fixture.detectChanges();
    const subFooterLinkAfterChange = fixture.nativeElement.querySelector('.rhc-page-subfooter');
    expect(subFooterLinkAfterChange).toBeFalsy();
  });
});
