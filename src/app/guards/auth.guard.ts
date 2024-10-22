import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Ajusta la ruta según tu proyecto
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ERole } from '../interfaces/rol.interface';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inyecta el servicio de autenticación
  // const router = inject(Router); // Inyecta el router para redirigir si no está autenticado
  // const messageService = inject(MessageService)

  if (authService.isLoggedIn()) {
    // router.navigate([authService.currentUser.role === ERole.ADMIN ? '/managment' : '/home'])
    return true; // Permite el acceso si el usuario está autenticado
  } else {
    // messageService.add({severity: 'warning', summary: 'warning', detail: 'Ups, no está iniciada la sesión'})
    // router.navigate(['/auth']); // Redirige a la página de autenticación
    return false; // Niega el acceso si no está autenticado
  }
};