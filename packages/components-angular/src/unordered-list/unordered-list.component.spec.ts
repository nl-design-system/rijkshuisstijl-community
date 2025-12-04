import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnorderedListComponent } from './unordered-list.component';
import { UnorderedListItemComponent } from '../unordered-list-item/unordered-list-item.component';

@Component({
  template: `
    <ul rhc-unordered-list>
      <li rhc-unordered-list-item>List item 1</li>
      <li rhc-unordered-list-item>List item 2</li>
    </ul>
  `,
  imports: [UnorderedListComponent, UnorderedListItemComponent],
})
class DefaultUnorderedListComponent {}

describe('UnorderedListComponent', () => {
  let component: DefaultUnorderedListComponent;
  let fixture: ComponentFixture<DefaultUnorderedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultUnorderedListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultUnorderedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have solely the utrecht-unordered-list class if the nested prop is not set', () => {
    const ul = fixture.nativeElement.querySelector('ul');
    expect(ul).toHaveAttribute('rhc-unordered-list');
    expect(ul).toHaveClass('utrecht-unordered-list');
    expect(ul).not.toHaveClass('utrecht-unordered-list--nested');
  });
});

@Component({
  template: `
    <ul rhc-unordered-list>
      <li rhc-unordered-list-item>List item 1</li>
      <li rhc-unordered-list-item>
        List item 2
        <ul rhc-unordered-list [nested]="true">
          <li rhc-unordered-list-item>Nested list item 1</li>
          <li rhc-unordered-list-item>Nested list item 2</li>
        </ul>
      </li>
    </ul>
  `,
  imports: [UnorderedListComponent, UnorderedListItemComponent],
})
class NestedUnorderedListComponent {}

describe('UnorderedListComponent which is nested', () => {
  let component: NestedUnorderedListComponent;
  let fixture: ComponentFixture<NestedUnorderedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedUnorderedListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NestedUnorderedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should also have the utrecht-unordered-list--nested class if the nested prop is set', () => {
    const ul = fixture.nativeElement.querySelector('ul > li > ul');
    expect(ul).toHaveAttribute('rhc-unordered-list');
    expect(ul).toHaveClass('utrecht-unordered-list');
    expect(ul).toHaveClass('utrecht-unordered-list--nested');
  });
});
