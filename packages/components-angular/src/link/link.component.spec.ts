import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LinkComponent } from './link.component';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the nl-paragraph class', () => {
    const element = fixture.debugElement.query(By.css('.nl-link'));
    expect(element).toBeTruthy();
  });

  it('should render text content', () => {
    const paragraphDebugElement = fixture.debugElement.query(By.css('.nl-link'));
    paragraphDebugElement.nativeElement.innerHTML = 'Lorem ipsum dolor sit amet';
    expect(fixture.nativeElement).toContainHTML('Lorem ipsum dolor sit amet');
  });
});
