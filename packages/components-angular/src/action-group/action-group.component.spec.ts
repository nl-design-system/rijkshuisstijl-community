import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActionGroupComponent } from './action-group.component';

describe('ActionGroupComponent', () => {
  let component: ActionGroupComponent;
  let fixture: ComponentFixture<ActionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "utrecht-action-group--row" class by default', () => {
    const divEl = fixture.debugElement.query(By.css('div')).nativeElement;
    expect(divEl.classList).toContain('utrecht-action-group--row');
    expect(divEl.classList).not.toContain('utrecht-action-group--column');
  });

  it('should apply "column" direction class when input is column', () => {
    component.direction = 'column';
    fixture.detectChanges();

    const divEl = fixture.debugElement.query(By.css('div')).nativeElement;
    expect(divEl.classList).toContain('utrecht-action-group--column');
    expect(divEl.classList).not.toContain('utrecht-action-group--row');
  });

  it('should apply "row" direction class when input is row', () => {
    component.direction = 'row';
    fixture.detectChanges();

    const divEl = fixture.debugElement.query(By.css('div')).nativeElement;
    expect(divEl.classList).toContain('utrecht-action-group--row');
    expect(divEl.classList).not.toContain('utrecht-action-group--column');
  });
});
