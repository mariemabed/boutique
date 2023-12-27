import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestprodComponent } from './gestprod.component';

describe('GestprodComponent', () => {
  let component: GestprodComponent;
  let fixture: ComponentFixture<GestprodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestprodComponent]
    });
    fixture = TestBed.createComponent(GestprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
