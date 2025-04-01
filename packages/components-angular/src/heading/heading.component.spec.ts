import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeadingComponent, HeadingLevel } from './heading.component';

describe('HeadingComponent', () => {
  let component: HeadingComponent;
  let fixture: ComponentFixture<HeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the correct heading level', () => {
    for (let level of [1, 2, 3, 4, 5] as HeadingLevel[]) {
      component.headingLevel = level;
      fixture.detectChanges();
      const element = fixture.nativeElement.querySelector(`h${level}`);
      expect(element).toBeTruthy();
    }
  });

  it('should apply the css class according to appearance level', () => {
    component.headingLevel = 5;
    component.appearanceLevel = 2;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.nl-heading--level-2'));
    expect(element).toBeTruthy();
  });

  it('should contain the nl-heading class', () => {
    component.headingLevel = 3;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.nl-heading'));
    expect(element).toBeTruthy();
  });

  it('should render rich text content', () => {
    component.headingLevel = 1;
    fixture.detectChanges();
    const headingDebugElement = fixture.debugElement.query(By.css('.nl-heading--level-1'));
    headingDebugElement.nativeElement.innerHTML = '<strong>Breaking</strong> news';
    expect(fixture.nativeElement).toContainHTML('strong');
  });
});
