import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
  { path: 'option1', component: ContentComponent, data: { content: 'Content for Option 1' }},
  { path: 'option2', component: ContentComponent, data: { content: 'Content for Option 2' }},
  { path: 'option3', component: ContentComponent, data: { content: 'Content for Option 3' }},
  { path: '', redirectTo: '/option1', pathMatch: 'full' }
];
