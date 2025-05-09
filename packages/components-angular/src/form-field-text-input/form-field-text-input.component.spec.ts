import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormFieldTextInputComponent } from './form-field-text-input.component';

@Component({
  template: `
    <form [formGroup]="form" (submit)="submit()">
      <rhc-form-field-text-input formControlName="username" />
    </form>
  `,
  imports: [FormFieldTextInputComponent, ReactiveFormsModule],
})
class FormFieldTextInputInForm {
  form = new FormGroup({
    username: new FormControl(''),
  });

  submit(): void {
    console.log('Submitting...');
    console.log(this.form.value.username);
  }
}

describe('FormFieldTextInputInForm', () => {
  let component: FormFieldTextInputInForm;
  let fixture: ComponentFixture<FormFieldTextInputInForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldTextInputInForm],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldTextInputInForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit successfully', () => {
    component.submit();
  });
});
