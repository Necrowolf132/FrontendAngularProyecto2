import { TestBed, inject } from '@angular/core/testing';

import { ManejadortokenService } from './manejadortoken.service';

describe('ManejadortokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManejadortokenService]
    });
  });

  it('should be created', inject([ManejadortokenService], (service: ManejadortokenService) => {
    expect(service).toBeTruthy();
  }));
});
