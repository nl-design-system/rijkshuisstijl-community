import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarItemComponent } from './navbar-item.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  template: `
    <li rhc-navbar-item href="#">
      <rhc-icon icon="home" />
      Link
    </li>
  `,
  imports: [NavbarItemComponent, IconComponent],
})
class NavbarItemWithIconComponent {}

describe('NavbarItemWithIconComponent', () => {
  let component: NavbarItemWithIconComponent;
  let fixture: ComponentFixture<NavbarItemWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarItemWithIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarItemWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an icon and text when provided', () => {
    const icon = fixture.nativeElement.querySelector('rhc-icon');

    expect(fixture.nativeElement).toHaveTextContent('Link');
    expect(icon).toBeTruthy();
  });
});

@Component({
  template: ` <li rhc-navbar-item href="#">Link</li> `,
  imports: [NavbarItemComponent],
})
class NavbarItemWithoutIconComponent {}

describe('NavbarItemWithoutIconComponent', () => {
  let component: NavbarItemWithoutIconComponent;
  let fixture: ComponentFixture<NavbarItemWithoutIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarItemWithoutIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarItemWithoutIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display an icon', () => {
    const icon = fixture.nativeElement.querySelector('rhc-icon');

    expect(icon).toBeFalsy();
  });

  it('should display the correct text', () => {
    expect(fixture.nativeElement).toHaveTextContent('Link');
  });
});
