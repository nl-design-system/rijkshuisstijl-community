import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSummaryComponent } from './data-summary.component';

describe('ActionGroupComponent', () => {
  let component: DataSummaryComponent;
  let fixture: ComponentFixture<DataSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
