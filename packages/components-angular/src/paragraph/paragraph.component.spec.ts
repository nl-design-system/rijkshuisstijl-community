import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ParagraphComponent } from './paragraph.component';

describe('ParagraphComponent', () => {
  let component: ParagraphComponent;
  let fixture: ComponentFixture<ParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParagraphComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the nl-paragraph class', () => {
    const element = fixture.debugElement.query(By.css('.nl-paragraph'));
    expect(element).toBeTruthy();
  });

  it('should apply the css classes conditionally according to appearance', () => {
    component.appearance = 'lead';
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.nl-paragraph--lead'));
    expect(element).toBeTruthy();

    component.appearance = undefined;
    fixture.detectChanges();
    element = fixture.debugElement.query(By.css('.nl-paragraph--lead'));
    expect(element).toBeFalsy();
  });

  it('should render rich text content', () => {
    const paragraphDebugElement = fixture.debugElement.query(By.css('.nl-paragraph'));
    paragraphDebugElement.nativeElement.innerHTML = '<strong>Breaking</strong> news';
    expect(fixture.nativeElement).toContainHTML('strong');
  });
});
