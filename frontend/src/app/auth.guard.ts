import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service'; // Servicio de autenticación
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);  // Inyecta el servicio de autenticación
  const router = inject(Router);  // Inyecta el router

  if (authService.isLoggedIn()) {
    return true;  // Permite acceso si el usuario está autenticado
  } else {
    router.navigate(['login']);  // Redirige al login si no está autenticado
    return false;
  }
};
