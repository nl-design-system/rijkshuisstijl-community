import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render subtitle conditionally', () => {
    component.subtitle = null;
    fixture.detectChanges();
    let paragraphDebugElement = fixture.debugElement.query(By.css('.rhc-logo__subtitle'));
    expect(paragraphDebugElement).toBeFalsy();

    component.subtitle = 'My subtitle';
    fixture.detectChanges();
    paragraphDebugElement = fixture.debugElement.query(By.css('.rhc-logo__subtitle'));
    expect(paragraphDebugElement).toBeTruthy();
  });
});
