import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscCommentComponent } from './disc-comment.component';

describe('DiscCommentComponent', () => {
  let component: DiscCommentComponent;
  let fixture: ComponentFixture<DiscCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
