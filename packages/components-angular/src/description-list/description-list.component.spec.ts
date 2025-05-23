import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptionListComponent } from './description-list.component';

describe('DescriptionListComponent', () => {
  let component: DescriptionListComponent;
  let fixture: ComponentFixture<DescriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the caption', () => {
    component.caption = 'Test Caption';
    fixture.detectChanges();

    const captionElement = fixture.nativeElement.querySelector('.denhaag-description-list__caption');
    expect(captionElement).toBeTruthy();
    expect(captionElement.textContent).toContain('Test Caption');
  });

  it('should not render a caption when it is null', () => {
    component.caption = null;
    fixture.detectChanges();

    const captionElement = fixture.nativeElement.querySelector('.denhaag-description-list__caption');
    expect(captionElement).toBeFalsy();
  });

  it('should display the items', () => {
    component.items = [
      { title: 'Item 1', detail: 'Detail 1' },
      { title: 'Item 2', detail: 'Detail 2' },
    ];
    fixture.detectChanges();

    const items = fixture.nativeElement.querySelectorAll('dl > div');
    expect(items.length).toBe(2);
    expect(items[0].querySelector('dt').textContent).toContain('Item 1');
    expect(items[0].querySelector('dd').textContent).toContain('Detail 1');
    expect(items[1].querySelector('dt').textContent).toContain('Item 2');
    expect(items[1].querySelector('dd').textContent).toContain('Detail 2');
  });
  it('should not render items when the list is empty', () => {
    component.items = [];
    fixture.detectChanges();

    const items = fixture.nativeElement.querySelectorAll('dl > div');
    expect(items.length).toBe(0);
  });
});
