import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private timeoutDuration = 30 * 60 * 1000;  // 30 minutos de inactividad
  private inactivityTimer: any;

  constructor(private router: Router) {
    // Verificar si estamos en el entorno del navegador
    if (this.isBrowser()) {
      this.initInactivityDetection();
      this.handleBeforeUnload();
    }
  }

  // Método para iniciar sesión y guardar el token en localStorage
  login(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
      this.resetInactivityTimer();  // Restablecer el temporizador de inactividad al iniciar sesión
    }
  }

  // Verificar si el usuario está autenticado (si el token existe y no ha expirado)
  isLoggedIn(): boolean {
    return this.isBrowser() && !this.isTokenExpired();  // Usuario está logueado si el token no ha expirado
  }

  // Cerrar sesión eliminando el token y limpiando el temporizador de inactividad
  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('token');
      clearTimeout(this.inactivityTimer);
      this.router.navigate(['/login']);  // Redirigir al login después de cerrar sesión
    }
  }

  // Verificar si el token ha expirado
  private isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;  // Si no hay token, se considera que ha expirado

    const tokenPayload = JSON.parse(atob(token.split('.')[1]));  // Decodificar payload del JWT
    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(tokenPayload.exp);  // Obtener la fecha de expiración

    return expirationDate < new Date();  // True si el token ha expirado
  }

  // Obtener el token de localStorage
  private getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem('token') : null;
  }

  // Reiniciar el temporizador de inactividad
  private resetInactivityTimer(): void {
    if (this.isBrowser()) {
      if (this.inactivityTimer) {
        clearTimeout(this.inactivityTimer);
      }

      this.inactivityTimer = setTimeout(() => {
        this.logout();  // Cerrar sesión si el usuario ha estado inactivo
      }, this.timeoutDuration);
    }
  }

  // Detectar actividad del usuario para reiniciar el temporizador de inactividad
  private initInactivityDetection(): void {
    if (this.isBrowser()) {
      window.addEventListener('mousemove', () => this.resetInactivityTimer());
      window.addEventListener('keypress', () => this.resetInactivityTimer());
      window.addEventListener('scroll', () => this.resetInactivityTimer());
    }
  }

  // Manejar el cierre del navegador o pestaña para cerrar sesión
  private handleBeforeUnload(): void {
    if (this.isBrowser()) {
      window.addEventListener('beforeunload', () => {
        this.logout();  // Cierra sesión al cerrar la pestaña o el navegador
      });
    }
  }

  // Verificar si estamos en el navegador
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
