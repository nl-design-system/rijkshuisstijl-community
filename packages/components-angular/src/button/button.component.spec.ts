import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button.component';

@Component({
  template: ` <button rhc-button [appearance]="appearance" [disabled]="disabled">Label</button> `,
  imports: [ButtonComponent],
})
class StandAloneButtonComponent {
  @Input() appearance?: '' | 'primary-action' | 'secondary-action' | 'subtle' = '';
  @Input() disabled?: boolean = false;
}

describe('ButtonComponent', () => {
  let component: StandAloneButtonComponent;
  let fixture: ComponentFixture<StandAloneButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandAloneButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StandAloneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a native <button>', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.tagName.toLowerCase()).toBe('button');
  });

  it('should apply the primary-action class', () => {
    component.appearance = 'primary-action';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList).toContain('utrecht-button--primary-action');
  });

  it('should be disabled when the disabled input is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
  });
});

@Component({
  template: `
    <form (ngSubmit)="submitFunction()">
      <button rhc-button [disabled]="disabled">Submit</button>
    </form>
  `,
  imports: [ButtonComponent, FormsModule],
})
class SubmitButtonComponentInForm {
  @Input() disabled?: boolean = false;
  submitFunction = jest.fn();
}

describe('SubmitButtonComponentInForm', () => {
  let component: SubmitButtonComponentInForm;
  let fixture: ComponentFixture<SubmitButtonComponentInForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitButtonComponentInForm],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitButtonComponentInForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form', () => {
    const submitButton = fixture.nativeElement.querySelector('form > button');
    expect(submitButton).toHaveTextContent('Submit');
    submitButton.click();
    expect(component.submitFunction).toHaveBeenCalled();
  });

  it('should not submit the form if the button is disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const submitButton = fixture.nativeElement.querySelector('form > button');

    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveTextContent('Submit');

    submitButton.click();
    expect(component.submitFunction).not.toHaveBeenCalled();
  });
});

@Component({
  template: `
    <form (ngSubmit)="submitFunction()">
      <button rhc-button type="button">Don't submit</button>
    </form>
  `,
  imports: [ButtonComponent, FormsModule],
})
class RegularButtonComponentInForm {
  submitFunction = jest.fn();
}

describe('RegularButtonComponentInForm', () => {
  let component: RegularButtonComponentInForm;
  let fixture: ComponentFixture<RegularButtonComponentInForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularButtonComponentInForm],
    }).compileComponents();

    fixture = TestBed.createComponent(RegularButtonComponentInForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit the form', () => {
    const button = fixture.nativeElement.querySelector('form > button');
    expect(button).toHaveTextContent("Don't submit");
    button.click();
    expect(component.submitFunction).not.toHaveBeenCalled();
  });
});
