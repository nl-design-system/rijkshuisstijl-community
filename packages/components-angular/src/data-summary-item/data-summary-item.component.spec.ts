import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSummaryItemComponent } from './data-summary-item.component';

@Component({
  imports: [DataSummaryItemComponent],
  template: `
    <div rhc-data-summary-item key="Mijn key" value="Mijn value" href="#" actionLabel="Lees meer" target="_self"></div>
  `,
})
class DataSummaryItemWithAction {}

describe('DataSummaryItemComponentWithAction', () => {
  let component: DataSummaryItemWithAction;
  let fixture: ComponentFixture<DataSummaryItemWithAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSummaryItemWithAction],
    }).compileComponents();

    fixture = TestBed.createComponent(DataSummaryItemWithAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the action label when provided', () => {
    const rhcLink = fixture.nativeElement.querySelector('rhc-link');
    const a = rhcLink.querySelector('a');
    expect(rhcLink).toBeTruthy();
    expect(rhcLink).toHaveTextContent('Lees meer');
    expect(a).toHaveAttribute('href', '#');
    expect(a).toHaveAttribute('target', '_self');
  });
});

@Component({
  imports: [DataSummaryItemComponent],
  template: `<div rhc-data-summary-item key="Mijn key" value="Mijn value"></div>`,
})
class DataSummaryItemWithoutAction {}

describe('DataSummaryItemComponentWithoutAction', () => {
  let component: DataSummaryItemWithoutAction;
  let fixture: ComponentFixture<DataSummaryItemWithoutAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSummaryItemWithoutAction],
    }).compileComponents();

    fixture = TestBed.createComponent(DataSummaryItemWithoutAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display the action label when not provided', () => {
    const rhcLink = fixture.nativeElement.querySelector('rhc-link');
    expect(rhcLink).toBeFalsy();
  });
});
