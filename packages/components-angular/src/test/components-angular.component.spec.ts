import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsAngularComponent } from './components-angular.component';

describe('ComponentsAngularComponent', () => {
  let component: ComponentsAngularComponent;
  let fixture: ComponentFixture<ComponentsAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsAngularComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
