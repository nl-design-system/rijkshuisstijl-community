import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnorderedListItemComponent } from './unordered-list-item.component';

describe('UnorderedListItemComponent', () => {
  let component: UnorderedListItemComponent;
  let fixture: ComponentFixture<UnorderedListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnorderedListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnorderedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
