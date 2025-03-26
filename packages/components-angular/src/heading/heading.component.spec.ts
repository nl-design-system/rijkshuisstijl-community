import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeadingComponent, HeadingLevels } from './heading.component';

// This is a test component used to test how the HeadingComponent handles child elements
@Component({
  template: `<community-heading [headingLevel]="headingLevel">{{ text }}</community-heading>`,
  imports: [HeadingComponent],
})
class TestHostComponent {
  @Input() headingLevel!: HeadingLevels;
  @Input() appearanceLevel?: HeadingLevels;
  @Input() text?: string;
}

describe('HeadingComponent', () => {
  let component: HeadingComponent;
  let fixture: ComponentFixture<HeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingComponent, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the correct heading level', () => {
    for (let i of [1, 2, 3, 4, 5, 6] as HeadingLevels[]) {
      component.headingLevel = i;
      fixture.detectChanges();
      const element = fixture.nativeElement.querySelector(`h${i}`);
      expect(element).toBeTruthy();
    }
  });

  it('should apply the css class according to appearance level', () => {
    component.headingLevel = 6;
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

  it('should render child text', () => {
    // Setup host component
    const hostFixture = TestBed.createComponent(TestHostComponent);
    const hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
    expect(hostComponent).toBeTruthy();

    const text = 'Hello World';
    const headingLevel = 5;
    hostComponent.headingLevel = headingLevel;
    hostComponent.text = text;
    hostFixture.detectChanges();

    const element = hostFixture.nativeElement.querySelector(`h${headingLevel}`);
    expect(element.textContent).toBe(text);
  });
});
