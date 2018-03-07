import { TestBed, inject } from '@angular/core/testing';

import { WoquiTokiService } from './woqui-toki.service';

describe('WoquiTokiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WoquiTokiService]
    });
  });

  it('should be created', inject([WoquiTokiService], (service: WoquiTokiService) => {
    expect(service).toBeTruthy();
  }));
});
