import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { ERole } from '../interfaces/rol.interface';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const user = authService.getUserSessionStorage()
  const router = inject(Router)

  if(user.role === ERole.ADMIN) return true
  else {
    router.navigate(['not-allowed'])
    return false
  }
};
