import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TicketService } from './ticket.service'; // Importa tu servicio aquí
import { UserService } from './user.service';
import { UserFormComponent } from './components/user-form/user-form.component';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [

    // Declara otros componentes aquí si es necesario
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   // ReactiveFormsModule // Asegúrate de que ReactiveFormsModule está aquí
  ],
  providers: [
    TicketService,
    provideHttpClient(withFetch()) ], // Añade el servicio en providers

})
export class AppModule { }




