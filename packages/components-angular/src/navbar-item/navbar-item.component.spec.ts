import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarItemComponent } from './navbar-item.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  template: `
    <li rhc-navbar-item href="#">
      <rhc-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-home"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      </rhc-icon>
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
