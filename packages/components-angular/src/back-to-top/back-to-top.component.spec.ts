import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackToTopComponent } from './back-to-top.component';

describe('BackToTopComponent', () => {
  let component: BackToTopComponent;
  let fixture: ComponentFixture<BackToTopComponent>;
  const mockWindow = { scrollTo: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackToTopComponent],
      providers: [{ provide: Window, useValue: mockWindow }],
    }).compileComponents();

    fixture = TestBed.createComponent(BackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll', () => {
    const button = fixture.debugElement.nativeElement.querySelector('.rhc-page-subfooter__backtotop');
    button?.click();
    fixture.whenStable().then(() => {
      expect(component.scrollBackToTop).toHaveBeenCalled();
      expect(mockWindow.scrollTo).toHaveBeenCalledWith({ top: 0 });
    });
  });
});
