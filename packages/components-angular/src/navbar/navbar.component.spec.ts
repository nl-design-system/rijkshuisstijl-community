import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { EndItemDirective } from '../navbar-item/end-item.directive';
import { HeadingItemDirective } from '../navbar-item/heading-item.directive';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';

@Component({
  template: `
    <rhc-navbar [showEndItems]="showEndItems">
      <li rhc-navbar-item rhcHeadingItem href="#">Heading</li>
      <li rhc-navbar-item href="#">Home</li>
      <li rhc-navbar-item rhcEndItem href="#">Account</li>
    </rhc-navbar>
  `,
  imports: [NavbarItemComponent, NavbarComponent, HeadingItemDirective, EndItemDirective],
})
class Navbar {
  @Input() showEndItems?: boolean = false;
}

describe('NavbarComponent', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display the endItems ul if showEndItems is false', () => {
    const nav = fixture.nativeElement.querySelector('nav');
    const uls = nav.querySelectorAll('ul');

    expect(uls.length).toBe(1);
    expect(uls[0].classList.contains('rhc-nav-bar__list--end')).toBeFalsy();
  });

  it('should display the endItems ul if showEndItems is true', () => {
    component.showEndItems = true;
    fixture.detectChanges();

    const nav = fixture.nativeElement.querySelector('nav');
    const uls = nav.querySelectorAll('ul');

    expect(uls.length).toBe(2);
    expect(uls[0].classList.contains('rhc-nav-bar__list--end')).toBeFalsy();
    expect(uls[1].classList.contains('rhc-nav-bar__list--end')).toBeTruthy();
  });

  it('should only place the li with the rhcEndItem directive in the second ul', () => {
    component.showEndItems = true;
    fixture.detectChanges();

    const nav = fixture.nativeElement.querySelector('nav');
    const uls = nav.querySelectorAll('ul');

    expect(uls.length).toBe(2);

    const navbarItems = uls[0].querySelectorAll('li');
    const navbarEndItems = uls[1].querySelectorAll('li');

    expect(navbarItems.length).toBe(2);
    expect(navbarEndItems.length).toBe(1);

    expect(navbarItems[0]).toHaveTextContent('Heading');
    expect(navbarItems[1]).toHaveTextContent('Home');
    expect(navbarEndItems[0]).toHaveTextContent('Account');
  });
});
