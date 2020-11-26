import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscStoreComponent } from './disc-store.component';

describe('DiscStoreComponent', () => {
  let component: DiscStoreComponent;
  let fixture: ComponentFixture<DiscStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
