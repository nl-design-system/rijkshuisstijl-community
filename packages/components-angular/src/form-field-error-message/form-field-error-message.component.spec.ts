import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormFieldErrorMessageComponent } from './form-field-error-message.component';

describe('FormFieldErrorMessageComponent', () => {
  let component: FormFieldErrorMessageComponent;
  let fixture: ComponentFixture<FormFieldErrorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldErrorMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
