import { TestBed } from '@angular/core/testing';

import { DemoLibShellService } from './demo-lib-shell.service';

describe('DemoLibShellService', () => {
  let service: DemoLibShellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoLibShellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
