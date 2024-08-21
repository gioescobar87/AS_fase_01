import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { GestionAdminComponent } from './gestion-admin/gestion-admin.component';
import { AdminTicketComponent } from './admin-ticket/admin-ticket.component';
import { DatoSoporteComponent } from './dato-soporte/dato-soporte.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'gestion_admin', component: GestionAdminComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'option1', component: ContentComponent, data: { content: 'Content for Option 1' }, canActivate: [authGuard] },
  { path: 'option3', component: ContentComponent, data: { content: 'Content for Option 3' }, canActivate: [authGuard] },
  { path: 'Tickets', component: AdminTicketComponent, canActivate: [authGuard] },
  { path: 'sopor_dato', component: DatoSoporteComponent, canActivate: [authGuard] },

  // Redirección por defecto
  { path: '', redirectTo: '/option1', pathMatch: 'full' },

  // Ruta para manejar errores de rutas no encontradas
  { path: '**', redirectTo: '/login' }
];
