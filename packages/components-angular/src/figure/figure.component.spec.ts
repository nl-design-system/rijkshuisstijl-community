import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FigureComponent } from './figure.component';

describe('FigureComponent', () => {
  let component: FigureComponent;
  let fixture: ComponentFixture<FigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
