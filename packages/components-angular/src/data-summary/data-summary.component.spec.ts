import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSummaryComponent } from './data-summary.component';
import { DataSummaryItemComponent } from '../data-summary-item/data-summary-item.component';

@Component({
  imports: [DataSummaryComponent, DataSummaryItemComponent],
  template: `
    <rhc-data-summary [appearance]="appearance">
      <div
        rhc-data-summary-item
        key="Mijn key"
        value="Mijn value"
        href="#"
        actionLabel="Lees meer"
        target="_self"
      ></div>
      <div
        rhc-data-summary-item
        key="Mijn tweede key"
        value="Mijn tweede value"
        href="#"
        actionLabel="Lees meer"
        target="_self"
      ></div>
    </rhc-data-summary>
  `,
})
class DataSummaryHostComponent {
  @Input() appearance: 'Row' | 'Column' = 'Column';
}

describe('DataSummaryComponent', () => {
  let component: DataSummaryHostComponent;
  let fixture: ComponentFixture<DataSummaryHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSummaryHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataSummaryHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct class when appearance is set to Column', () => {
    expect(fixture.nativeElement.querySelector('dl')).toHaveClass('rhc-data-summary--column');
  });

  it('should add the correct class when appearance is set to Column', () => {
    component.appearance = 'Row';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('dl')).toHaveClass('rhc-data-summary--row');
  });

  it('should render its two children correctly', () => {
    const items = fixture.nativeElement.querySelectorAll('div[rhc-data-summary-item]');
    expect(items.length).toBe(2);
  });
});
