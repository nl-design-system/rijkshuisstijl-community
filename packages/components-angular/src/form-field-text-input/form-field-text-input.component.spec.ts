import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormFieldTextInputComponent } from './form-field-text-input.component';

@Component({
  template: `
    <form [formGroup]="form">
      <rhc-form-field-text-input
        inputId="my-id"
        formControlName="username"
        [hidden]="hidden"
        [invalid]="invalid"
        [class]="class"
      />
    </form>
  `,
  imports: [FormFieldTextInputComponent, ReactiveFormsModule],
})
class FormFieldTextInputInForm {
  @Input() hidden?: boolean = false;
  @Input() invalid?: boolean = false;
  @Input() class?: string = undefined;
  form = new FormGroup({
    username: new FormControl(''),
  });
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

  it('should render a rhc-form-field-text-input element', () => {
    const formFieldTextInput = fixture.nativeElement.querySelector('rhc-form-field-text-input');
    expect(formFieldTextInput).toBeInTheDocument();
  });

  it('should render a design system BEM class name: utrecht-form-field', () => {
    const formFieldTextInput = fixture.nativeElement.querySelector('rhc-form-field-text-input');
    const formField = formFieldTextInput.querySelector('rhc-form-field');
    const div = formField.querySelector('div');
    expect(div).toHaveClass('utrecht-form-field');
  });

  it('can be hidden', () => {
    component.hidden = true;
    fixture.detectChanges();
    const formFieldTextInput = fixture.nativeElement.querySelector('rhc-form-field-text-input');
    expect(formFieldTextInput).not.toBeVisible();
  });

  it('can have a custom class', () => {
    component.class = 'my-class';
    fixture.detectChanges();
    const formFieldTextInput = fixture.nativeElement.querySelector('rhc-form-field-text-input');
    expect(formFieldTextInput).toHaveClass('my-class');
  });

  it('associates the label with the input element', () => {
    const formFieldTextInput = fixture.nativeElement.querySelector('rhc-form-field-text-input');
    const formField = formFieldTextInput.querySelector('rhc-form-field');
    const div = formField.querySelector('div');
    const label = div.querySelector('label');
    const input = div.querySelector('input');

    expect(label.getAttribute('for')).toBe(input.id);
  });

  it('shows the error message when the input is invalid', () => {
    component.invalid = true;
    fixture.detectChanges();
    const formFieldErrorMessage = fixture.nativeElement.querySelector('rhc-form-field-error-message');
    expect(formFieldErrorMessage).toBeInTheDocument();
  });

  it('does not show the error message when the input is valid', () => {
    const formFieldErrorMessage = fixture.nativeElement.querySelector('rhc-form-field-error-message');
    expect(formFieldErrorMessage).not.toBeInTheDocument();
  });

  it('updates the form control value when typing in a value', () => {
    expect(component.form.get('username')?.value).toBe('');
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'my-username';
    input.dispatchEvent(new Event('input'));
    expect(component.form.get('username')?.value).toBe('my-username');
  });

  it('updates the form control value when changing the value programmatically', () => {
    expect(component.form.get('username')?.value).toBe('');
    component.form.controls.username.setValue('my-username');
    expect(component.form.get('username')?.value).toBe('my-username');
  });
});
