import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';

@Component({
  template: `<rhc-icon [icon]="icon"></rhc-icon>`,
  standalone: true,
  imports: [IconComponent],
})
class TestHostComponent {
  icon = 'kalender';
}

@Component({
  template: `<rhc-icon>Extra content</rhc-icon>`,
  standalone: true,
  imports: [IconComponent],
})
class TestSlotComponent {}

describe('IconComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    const iconElement = fixture.nativeElement.querySelector('rhc-icon');
    expect(iconElement).toBeTruthy();
  });
});

describe('IconComponent content projection', () => {
  let fixture: ComponentFixture<TestSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSlotComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestSlotComponent);
    fixture.detectChanges();
  });

  it('should project content into the component slot', () => {
    const iconElement = fixture.nativeElement.querySelector('rhc-icon');
    expect(iconElement.textContent).toContain('Extra content');
  });
});
