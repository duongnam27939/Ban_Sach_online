import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRearchComponent } from './products-rearch.component';

describe('ProductsRearchComponent', () => {
  let component: ProductsRearchComponent;
  let fixture: ComponentFixture<ProductsRearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsRearchComponent]
    });
    fixture = TestBed.createComponent(ProductsRearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
