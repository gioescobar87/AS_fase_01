import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { GestionAdminComponent } from './gestion-admin/gestion-admin.component';
import {AdminTicketComponent} from './admin-ticket/admin-ticket.component';
import { DatoSoporteComponent } from './dato-soporte/dato-soporte.component';
import { VerTicketsComponent } from './ver-tickets/ver-tickets.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { RolesComponent } from './roles/roles.component';

export const routes: Routes = [
  { path: 'gestion_admin', component: GestionAdminComponent },
  { path: 'gestion_roles', component: RolesComponent },
  { path: 'option3', component: ContentComponent, data: { content: 'Content for Option 3' }},
  { path: 'option3', component: ContentComponent, data: { content: 'Content for Option 3' }},
  { path: 'Tickets', component: AdminTicketComponent },
  { path: 'sopor_dato', component: DatoSoporteComponent },
  { path: 'ver-tickets', component: VerTicketsComponent },
  { path: 'usuarios', component: UserListComponent },
  { path: 'usuarios/nuevo', component: UserFormComponent },
  { path: 'usuarios/:id', component: UserDetailComponent },
  { path: '', redirectTo: '/option1', pathMatch: 'full' }
];
