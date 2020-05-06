import { TestBed } from '@angular/core/testing';

import { SubscribeService } from './subscribe.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('SubscribeService', () => {
  let service: SubscribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [HttpClient]
    });
    service = TestBed.inject(SubscribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
