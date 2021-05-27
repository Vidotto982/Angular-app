import { TestBed } from '@angular/core/testing';

import { ItemsCarritoService } from './items-carrito.service';

describe('ItemsCarritoService', () => {
  let service: ItemsCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
