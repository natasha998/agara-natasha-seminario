import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreQuantityComponent } from './store-quantity.component';

describe('StoreQuantityComponent', () => {
  let component: StoreQuantityComponent;
  let fixture: ComponentFixture<StoreQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
