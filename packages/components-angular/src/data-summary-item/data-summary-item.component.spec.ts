import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSummaryItemComponent } from './data-summary-item.component';

describe('ActionGroupComponent', () => {
  let component: DataSummaryItemComponent;
  let fixture: ComponentFixture<DataSummaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSummaryItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataSummaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
