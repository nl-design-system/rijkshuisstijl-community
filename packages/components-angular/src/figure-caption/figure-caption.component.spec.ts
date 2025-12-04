import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FigureCaptionComponent } from './figure-caption.component';

describe('FigureCaptionComponent', () => {
  let component: FigureCaptionComponent;
  let fixture: ComponentFixture<FigureCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigureCaptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FigureCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
