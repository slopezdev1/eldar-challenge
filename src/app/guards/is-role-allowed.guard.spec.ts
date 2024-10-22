import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isRoleAllowedGuard } from './is-role-allowed.guard';

describe('isRoleAllowedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isRoleAllowedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
