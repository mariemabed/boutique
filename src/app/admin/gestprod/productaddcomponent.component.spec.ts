import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductaddcomponentComponent } from './productaddcomponent.component';

describe('ProductaddcomponentComponent', () => {
  let component: ProductaddcomponentComponent;
  let fixture: ComponentFixture<ProductaddcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductaddcomponentComponent]
    });
    fixture = TestBed.createComponent(ProductaddcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
