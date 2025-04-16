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

  it('should map custom icon to Tabler icon', () => {
    const iconComponent = fixture.debugElement.children[0].componentInstance as IconComponent;
    expect(iconComponent.rhcIconRender).toBe('calendar-check');
  });
});
