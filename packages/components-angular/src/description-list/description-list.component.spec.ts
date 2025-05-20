import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptionListComponent } from './description-list.component';

describe('DescriptionListComponent', () => {
  let component: DescriptionListComponent;
  let fixture: ComponentFixture<DescriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
