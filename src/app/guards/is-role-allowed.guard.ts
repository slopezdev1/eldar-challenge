import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EPermission } from '../interfaces/permission.interface';
import { MessageService } from 'primeng/api';

export const isRoleAllowedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  const user = authService.getUserSessionStorage()  
  if(user?.permission?.includes(route.routeConfig?.path?.toUpperCase() as EPermission)) return true
  else {
    router.navigate(['not-allowed'])
    return false
  }
};
