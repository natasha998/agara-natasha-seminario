import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscCommentUserComponent } from './disc-comment-user.component';

describe('DiscCommentUserComponent', () => {
  let component: DiscCommentUserComponent;
  let fixture: ComponentFixture<DiscCommentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscCommentUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscCommentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
