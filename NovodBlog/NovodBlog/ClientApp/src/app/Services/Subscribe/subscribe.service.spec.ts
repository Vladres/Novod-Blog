import { TestBed } from '@angular/core/testing';

import { SubscribeService } from './subscribe.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

describe('SubscribeService', () => {
  let service: SubscribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(SubscribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
