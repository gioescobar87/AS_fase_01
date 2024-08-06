import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { GestionAdminComponent } from './gestion-admin/gestion-admin.component';

export const routes: Routes = [
  { path: 'gestion_admin', component: GestionAdminComponent },
  { path: 'option1', component: ContentComponent, data: { content: 'Content for Option 1' }},
  { path: 'option3', component: ContentComponent, data: { content: 'Content for Option 3' }},
  { path: '', redirectTo: '/option1', pathMatch: 'full' }
];
