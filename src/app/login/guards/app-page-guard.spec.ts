import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { appPageGuard } from './app-page-guard';

describe('appPageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => appPageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
