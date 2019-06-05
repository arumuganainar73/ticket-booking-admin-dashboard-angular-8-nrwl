import { async, TestBed } from '@angular/core/testing';
import { ProductListsModule } from './product-lists.module';

describe('ProductListsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProductListsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProductListsModule).toBeDefined();
  });
});
