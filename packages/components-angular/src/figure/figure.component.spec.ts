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

  it('should set borderEndEndRadius style property', () => {
    component.borderEndEndRadius = 10;
    fixture.detectChanges();
    expect(fixture.nativeElement.style.getPropertyValue('--utrecht-figure-img-border-end-end-radius')).toBe('10px');
  });

  it('should set borderEndStartRadius style property', () => {
    component.borderEndStartRadius = 20;
    fixture.detectChanges();
    expect(fixture.nativeElement.style.getPropertyValue('--utrecht-figure-img-border-end-start-radius')).toBe('20px');
  });

  it('should set borderStartEndRadius style property', () => {
    component.borderStartEndRadius = 30;
    fixture.detectChanges();
    expect(fixture.nativeElement.style.getPropertyValue('--utrecht-figure-img-border-start-end-radius')).toBe('30px');
  });

  it('should set borderStartStartRadius style property', () => {
    component.borderStartStartRadius = 40;
    fixture.detectChanges();
    expect(fixture.nativeElement.style.getPropertyValue('--utrecht-figure-img-border-start-start-radius')).toBe('40px');
  });
});
