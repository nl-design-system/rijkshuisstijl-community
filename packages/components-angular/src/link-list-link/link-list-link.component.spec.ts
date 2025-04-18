import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkListLinkComponent } from './link-list-link.component';

describe('LinkListLinkComponent', () => {
  let component: LinkListLinkComponent;
  let fixture: ComponentFixture<LinkListLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkListLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkListLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
