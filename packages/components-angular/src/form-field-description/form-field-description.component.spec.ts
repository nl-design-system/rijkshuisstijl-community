import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormFieldDescriptionComponent } from './form-field-description.component';

describe('FormFieldDescriptionComponent', () => {
  let component: FormFieldDescriptionComponent;
  let fixture: ComponentFixture<FormFieldDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldDescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
